import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [],
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.css'
})
export class PlaylistCardComponent {
  @Input() card:any;
}
