import { Component, Input } from '@angular/core';

interface Song{
  name:string,
  img:string,
  artist:string
}

@Component({
  selector: 'app-card-song',
  standalone: true,
  imports: [],
  templateUrl: './card-song.component.html',
  styleUrl: './card-song.component.css'
})
export class CardSongComponent {
  @Input() infoSong:Song ={
    name:'',
    img:'',
    artist:''
  } ;

  constructor(){}
}
