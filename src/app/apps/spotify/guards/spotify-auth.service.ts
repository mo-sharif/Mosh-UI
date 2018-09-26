import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SpotifyAuthService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const spotifyToken = sessionStorage.getItem('spotify-token');
    if (null === spotifyToken) {
      if (null === route.fragment || undefined === route.fragment) {
        window.location.replace(
          'https://accounts.spotify.com/authorize' +
          '?client_id=' + encodeURIComponent('1c67722af0494cf2b00336bd6fb4c019') +
          '&response_type=' + encodeURIComponent('token') +
          '&redirect_uri=' + encodeURIComponent('https://portal.oxygenna.com/angular/apps/spotify') +
          '&scope=' + encodeURIComponent('user-read-playback-state user-modify-playback-state') +
          '&state=' + encodeURIComponent('12345')
        );
        return false;
      } else {
        const params = new URLSearchParams(route.fragment);
        const spotifyAuth: any = {
          access_token: params.get('access_token'),
          token_type: params.get('token_type'),
          expires_in: parseInt(params.get('expires_in'), 10),
          state: params.get('state'),
        };
        sessionStorage.setItem('spotify-token', spotifyAuth.access_token);
      }
    }
    console.log(spotifyToken);
    return true;
  }

}
