import { MatSidenav } from '@angular/material';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'portal-funky-apps-menu',
  templateUrl: './apps-menu.component.html',
  styleUrls: ['./apps-menu.component.scss']
})
export class AppsMenuComponent {
  @Input() menuDrawer: MatSidenav;

  constructor() {}

}
