import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LayoutServiceComponent } from './layout-service/layout-service.component';

const routes: Routes = [
  {
    component: LayoutServiceComponent,
    path: 'layout-service',
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
