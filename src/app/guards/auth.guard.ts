import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { SpotifyService } from '../service/spotify/spotify.component';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const spotifyService = inject(SpotifyService);
  const router = inject(Router);
  if (spotifyService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/init'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
