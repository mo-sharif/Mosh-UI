import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TypographyComponent } from './typography/typography.component';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [{
  path: 'typography',
  component: TypographyComponent,
  data: {
    title: 'Typography'
  }
}, {
  path: 'colors',
  component: ColorsComponent,
  data: {
    title: 'Colors'
  }
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
