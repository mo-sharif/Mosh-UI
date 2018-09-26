import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { SpotifyAuthService } from './guards/spotify-auth.service';
import { SpotifyComponent } from './components/spotify/spotify.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    SpotifyComponent
  ],
  providers: [
    SpotifyAuthService
  ]
})
export class SpotifyModule { }
