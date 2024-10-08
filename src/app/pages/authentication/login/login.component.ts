import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../../service/spotify/spotify.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BtnRedesComponent } from '../../../components/btn-redes/btn-redes.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnRedesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private activateRouter: ActivatedRoute,
    private spotifyService: SpotifyService,
    private router: Router
  ) {}

  login(): void {
    this.spotifyService.login();
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    const { email, password } = this.getData(event);

    this.user.email = JSON.stringify(email);
    this.user.password = JSON.stringify(password);

    this.validateForm();
  }

  getData(event: Event) {
    const query = new window.FormData(event.target as HTMLFormElement);
    const email = query.get('email');
    const password = query.get('password');
    return { email, password };
  }
  
  validateForm() {
    if (this.user.email && this.user.password) {
      //console.log(this.user.email);
      //console.log(this.user.password);
      this.spotifyService.loginUser(this.user.email, this.user.password);
    } else {
      console.error('Email o contraseña no pueden estar vacíos');
    }
  }
}
