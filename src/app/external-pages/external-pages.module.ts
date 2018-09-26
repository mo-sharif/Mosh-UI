import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { routing } from './external-pages-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Error404Component } from './error-404/error-404.component';
import { Error500Component } from './error-500/error-500.component';
import { LockComponent } from './lock/lock.component';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    Error404Component,
    Error500Component,
    LockComponent,
  ]
})
export class ExternalPagesModule { }
