import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from './../../shared/shared.module';

import { MapsComponent } from './maps/maps.component';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXVUKDvaxn13Atl_SPuQj2g5MK-C1RYRs'
    }),
  ],
  declarations: [MapsComponent]
})
export class MapsModule { }
