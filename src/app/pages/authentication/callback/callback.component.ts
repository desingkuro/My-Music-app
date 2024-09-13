import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../../service/spotify/spotify.component';

@Component({
  selector: 'app-callback',
  template: '<p>Procesando...</p>',
})
export class CallbackComponent implements OnInit {
  authCode: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const code = params['code'];
      if (code) {
        // Aquí puedes manejar el código de autorización, por ejemplo
        //console.log('Authorization code:', code);
        this.spotifyService.getToken(code);
        // Redirigir a otra página después de procesar el código
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/init']);
      }
    });
  }
}
