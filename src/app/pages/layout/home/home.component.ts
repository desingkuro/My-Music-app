import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../service/state/state.service';
import { SpotifyService } from '../../../service/spotify/spotify.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  currentState: any;
  playLists = [];

  constructor(
    private stateService: StateService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    this.getData();
    this.getPlaylistsUser();
  }

  getPlaylistsUser(){
    const list = this.spotifyService.getPlatlists(this.currentState.id);
    list.then(items => {
      this.playLists = items;
    });
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
