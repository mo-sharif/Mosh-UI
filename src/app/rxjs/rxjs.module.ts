import { NgModule } from '@angular/core';

import { routing } from './rxjs-routing.module';
import { SharedModule } from './../shared/shared.module';

import { IntroductionComponent } from './introduction/introduction.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { SimplestRxjsComponent } from './include-examples/simplest-rxjs/simplest-rxjs.component';

@NgModule({
  imports: [
    routing,
    SharedModule,
  ],
  declarations: [
    SubjectExampleComponent,
    IntroductionComponent,
    SimplestRxjsComponent
  ]
})
export class RxjsModule { }
