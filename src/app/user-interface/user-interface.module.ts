import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { routing } from './user-interface-routing.module';

import { TypographyComponent } from './typography/typography.component';
import { TypographyExampleComponent } from '../elements/include-examples/typography-example/typography-example.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorsExampleComponent, DialogPopupColorComponent } from './include-examples/colors-example/colors-example.component';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    TypographyComponent,
    TypographyExampleComponent,
    ColorsComponent,
    ColorsExampleComponent,
    DialogPopupColorComponent
  ],
  entryComponents: [
    ColorsExampleComponent,
    DialogPopupColorComponent
  ],
})
export class UserInterfaceModule { }
