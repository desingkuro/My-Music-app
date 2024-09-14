import { Component, Input } from '@angular/core';
import { StateService } from '../../service/state/state.service';

interface Playlist{
  user:string;
  imagen:string;
  name:string;
  id:string
}

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [],
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.css'
})


export class PlaylistCardComponent {
  @Input() playlist:Playlist = {imagen:'',name:'',user:'',id:''};
  constructor(private stateService: StateService){}

  handleClick(id:string){
    this.stateService.updateIdPlaylist(id);
  }
}
