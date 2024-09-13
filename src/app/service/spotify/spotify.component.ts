import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  private clientId = 'c208eac582fc4812908d6568b873bfd7';
  private clientSecret = '6659f7683ac64edf80eb530cc1106ebb';
  private token : string = '';
  private authUrl = 'https://accounts.spotify.com/authorize';
  private tokenUrl = 'https://accounts.spotify.com/api/token';
  private redirectUri = 'http://localhost:4200/home';

  constructor(private http: HttpClient) {}

  login(): void {
    const scopes = 'user-read-private user-read-email';
    window.location.href = `${this.authUrl}?response_type=code&client_id=${this.clientId}&scope=${scopes}&redirect_uri=${this.redirectUri}`;
  }

  getToken(code: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
    });

    const body = `grant_type=authorization_code&code=${code}&redirect_uri=${this.redirectUri}`;

    return this.http.post(this.tokenUrl, body, { headers });
  }
  isAuthenticated(): boolean {
    // verificar si el token de autenticación está presente en el localStorage o sessionStorage
    return !!localStorage.getItem('token');
  }
}
