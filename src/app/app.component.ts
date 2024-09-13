import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import LoginComponent from "./pages/authentication/login/login.component";
import { SpotifyService } from './service/spotify/spotify.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-music-app';
  constructor(private activateRouter: ActivatedRoute, private spotifyService: SpotifyService){}

  ngOnInit():void{
    this.activateRouter.queryParams.subscribe(params=>{
      const code = params['code'];
      if(code){
        this.spotifyService.getToken(code).subscribe(response=>{
          console.log('Token',response.acces_token);
          const token = JSON.stringify(response.acces_token);
          localStorage.setItem('token',token);
        })
      }
    })
  }
}
