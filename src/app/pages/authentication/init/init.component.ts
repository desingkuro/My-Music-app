import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../../service/spotify/spotify.component';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {
  constructor(private activateRouter: ActivatedRoute, private spotifyService: SpotifyService){}
  loging():void{
    this.spotifyService.login();
  }

}
