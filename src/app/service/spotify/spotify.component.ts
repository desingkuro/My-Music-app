import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, generate, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private clientId = 'c208eac582fc4812908d6568b873bfd7';
  private clientSecret = '6659f7683ac64edf80eb530cc1106ebb';
  private token: string = '';
  private authUrl = 'https://accounts.spotify.com/authorize';
  private tokenUrl = 'https://accounts.spotify.com/api/token';
  private redirectUri = 'http://localhost:4200/callback';
  private accessToken = '';
  

  constructor(private http: HttpClient,private router: Router) {}

  login(): void {
    const scopes = 'user-read-private%20user-read-email';
    const state = this.generateRandomString(16);
    const url = `${this.authUrl}?response_type=code&client_id=${this.clientId}&scope=${scopes}&redirect_uri=${this.redirectUri}&state=${state}`;
    //alert(url);
    window.location.href = url;
  }

  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getToken(code: string) {
    const body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('code', code);
    body.set('redirect_uri', this.redirectUri);
    body.set('client_id', this.clientId);
    body.set('client_secret', this.clientSecret);

    return this.http
      .post('https://accounts.spotify.com/api/token', body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .subscribe((response: any) => {
        console.log('Access token:', response.access_token);
        // Guardar el token en el servicio para usarlo más tarde
        this.accessToken = response.access_token;
        localStorage.setItem('access_token',this.accessToken);
        // Redirigir a la página de login
        this.router.navigate(['/login']);
      });
  }

  isAuthenticated(): boolean {
    // verificar si el token de autenticación está presente en el localStorage o sessionStorage
    return !!localStorage.getItem('access_token');
  }
}
