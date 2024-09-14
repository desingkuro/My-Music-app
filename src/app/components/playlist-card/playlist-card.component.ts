import { Component, Input } from '@angular/core';

interface Playlist{
  user:string;
  imagen:string;
  name:string;
}

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [],
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.css'
})


export class PlaylistCardComponent {
  @Input() playlist:Playlist = {imagen:'',name:'',user:''};
  constructor(){}
}
