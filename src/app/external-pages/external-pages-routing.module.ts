import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Error404Component } from './error-404/error-404.component';
import { Error500Component } from './error-500/error-500.component';
import { LockComponent } from './lock/lock.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent,
  data: {
    title: 'Login'
  }
},
{
  path: 'register',
  component: RegisterComponent,
  data: {
    title: 'Register'
  }
},
{
  path: 'forgot-password',
  component: ForgotPasswordComponent,
  data: {
    title: 'Forgot Password'
  }
},
{
  path: '404',
  component: Error404Component,
  data: {
    title: 'Error 404'
  }
},
{
  path: '500',
  component: Error500Component,
  data: {
    title: 'Error 500'
  }
},
{
  path: 'lock',
  component: LockComponent,
  data: {
    title: 'Locked'
  }
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
