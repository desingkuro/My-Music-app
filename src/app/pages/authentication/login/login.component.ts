import { Component } from '@angular/core';
import { BtnRedesComponent } from '../../../components/btn-redes.component';
import { SpotifyService } from '../../../service/spotify/spotify.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnRedesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  constructor(private spotifyService: SpotifyService){}

  login():void{
    this.spotifyService.login();
  }
}
