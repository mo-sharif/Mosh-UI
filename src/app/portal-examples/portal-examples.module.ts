import { NgModule } from '@angular/core';

import { routing } from './portal-examples-routing.module';
import { SharedModule } from './../shared/shared.module';

import { LayoutServiceComponent } from './layout-service/layout-service.component';
import { LayoutServiceExampleComponent } from './include-examples/layout-service-example/layout-service-example.component';


@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    LayoutServiceComponent,
    LayoutServiceExampleComponent
  ]
})
export class PortalExamplesModule { }
