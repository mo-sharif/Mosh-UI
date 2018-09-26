import { MatSidenav } from '@angular/material';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'portal-funky-dashboards-menu',
  templateUrl: './dashboards-menu.component.html',
  styleUrls: ['./dashboards-menu.component.scss']
})
export class DashboardsMenuComponent {
  @Input() menuDrawer: MatSidenav;

  constructor() {}

}
