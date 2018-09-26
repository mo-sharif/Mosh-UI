import { CryptoDashboardComponent } from './crypto-dashboard/crypto-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './analytics/analytics.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';

const routes: Routes = [{
  path: 'analytics',
  component: DashboardComponent,
  data: {
    title: 'Analytics Dashboard'
  }
}, {
  path: 'ecommerce',
  component: EcommerceComponent,
  data: {
    title: 'E-Commerce Dashboard'
  }
}, {
  path: 'crypto',
  component: CryptoDashboardComponent,
  data: {
    title: 'CryptoCurrency'
  }
}, {
  path: 'project',
  component: ProjectDashboardComponent,
  data: {
    title: 'Project'
  }
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
