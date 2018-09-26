import { MatSidenav } from '@angular/material';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'portal-funky-elements-menu',
  templateUrl: './elements-menu.component.html',
  styleUrls: ['./elements-menu.component.scss'],
})
export class ElementsMenuComponent {
  @Input() menuDrawer: MatSidenav;

  constructor() { }
}
