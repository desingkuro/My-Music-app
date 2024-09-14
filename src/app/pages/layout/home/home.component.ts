import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../service/state/state.service';
import { SpotifyService } from '../../../service/spotify/spotify.component';
import { PlaylistCardComponent } from '../../../components/playlist-card/playlist-card.component';
import { CardSongComponent } from '../../../components/card-song/card-song.component';

interface PlayList {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: { url: string }[];
  name: string;
  owner: {
    display_name: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  tracks: { href: string; total: number };
  type: string;
  uri: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlaylistCardComponent,CardSongComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  currentState: any;
  listMusic: any;
  playLists:PlayList[] = [];

  constructor(
    private stateService: StateService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    this.getData();
    this.getPlaylistsUser();
    /*console.log(this.playLists)
    if (this.stateService.getId()!='') {
      this.getMusicPlaylist();
    }*/
    this.getMusicList();
  }

  async getPlaylistsUser() {
    const list = await this.spotifyService.getPlatlists(this.currentState.id);
    this.playLists = list;
  }

  async getMusicPlaylist(){
    const id = this.stateService.getId();
    const list = await this.spotifyService.getPlaylistTracks(id);
    console.log(list);
  }

  async getMusicList(){
    const listMusic = await this.spotifyService.getMusicRecomend();
    console.log(listMusic);
    this.listMusic = listMusic;
  }

  getData() {
    const data = localStorage.getItem('userInfo');
    if (data) {
      const dataTransform = JSON.parse(data);
      this.stateService.updateState(dataTransform);
      this.currentState = dataTransform;
    } else {
      this.stateService.currentState.subscribe(
        (state) => (this.currentState = state)
      );
    }
  }

  updateState() {
    const newUser = {
      display_name: 'Kuro',
      external_urls: {
        spotify: 'https://open.spotify.com/user/31zosdkqjyo2ofzqdedqch46enwe',
      },
      href: 'https://api.spotify.com/v1/users/31zosdkqjyo2ofzqdedqch46enwe',
      id: '31zosdkqjyo2ofzqdedqch46enwe',
      images: [],
      type: 'user',
      uri: 'spotify:user:31zosdkqjyo2ofzqdedqch46enwe',
      followers: { href: null, total: 0 },
      country: 'CO',
      product: 'free',
      explicit_content: { filter_enabled: false, filter_locked: false },
      email: 'andresmauricio745@gmail.com',
    };
    this.stateService.updateState(newUser);
  }
}
