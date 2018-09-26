import { LayoutService } from './layout.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

// Layouts
import { LayoutClassicComponent } from './layout-classic/layout-classic.component';
import { LayoutToolbarComponent } from './layout-toolbar/layout-toolbar.component';
import { LayoutCompactComponent } from './layout-compact/layout-compact.component';
import { LayoutBoxedComponent } from './layout-boxed/layout-boxed.component';
import { LayoutTabbedComponent } from './layout-tabbed/layout-tabbed.component';
import { LayoutFunkyComponent } from './layout-funky/layout-funky.component';

// Funky
import { AppsMenuComponent } from './layout-funky/sub-menus/apps-menu/apps-menu.component';
import { ElementsMenuComponent } from './layout-funky/sub-menus/elements-menu/elements-menu.component';
import { DashboardsMenuComponent } from './layout-funky/sub-menus/dashboards-menu/dashboards-menu.component';

// Components
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { MenuSidenavComponent } from './components/menu-sidenav/menu-sidenav.component';
import { NotificationSidenavComponent } from './components/notification-sidenav/notification-sidenav.component';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { VerticalIconMenuComponent } from './components/vertical-icon-menu/vertical-icon-menu.component';
import { ThemeSwitcherMenuComponent } from './components/theme-switcher-menu/theme-switcher-menu.component';
import { LayoutSwitcherMenuComponent } from './components/layout-switcher-menu/layout-switcher-menu.component';
import { PortalHeaderTitleDirective } from './directives/portal-header-title.directive';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { TopHorizontalMenuComponent } from './components/top-horizontal-menu/top-horizontal-menu.component';
import { LayoutLoaderComponent } from './components/layout-loader/layout-loader.component';
import { FooterComponent } from './components/footer/footer.component';

// Directives.
import { PortalScrollTopDirective } from './directives/portal-scroll-top.directive';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    LayoutClassicComponent,
    LayoutToolbarComponent,
    LayoutCompactComponent,
    LayoutBoxedComponent,
    LayoutTabbedComponent,
    LayoutFunkyComponent,
    UserMenuComponent,
    MenuSidenavComponent,
    NotificationSidenavComponent,
    LanguageMenuComponent,
    VerticalIconMenuComponent,
    AppsMenuComponent,
    ElementsMenuComponent,
    DashboardsMenuComponent,
    ThemeSwitcherMenuComponent,
    LayoutSwitcherMenuComponent,
    PortalHeaderTitleDirective,
    HorizontalMenuComponent,
    TopHorizontalMenuComponent,
    PortalScrollTopDirective,
    LayoutLoaderComponent,
    FooterComponent
  ],
  providers: [
    LayoutService
  ]
})
export class LayoutsModule { }
