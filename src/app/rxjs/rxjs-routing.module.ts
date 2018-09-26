import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [{
  path: 'intro',
  component: IntroductionComponent,
  data: {
    title: 'Intro'
  }
}, {
  path: 'subject',
  component: SubjectExampleComponent,
  data: {
    title: 'Subject'
  }
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
