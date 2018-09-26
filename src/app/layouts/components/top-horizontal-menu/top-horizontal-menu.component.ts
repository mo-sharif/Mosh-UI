import { MatSidenav } from '@angular/material';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'portal-top-horizontal-menu',
  templateUrl: './top-horizontal-menu.component.html',
  styleUrls: ['./top-horizontal-menu.component.scss']
})
export class TopHorizontalMenuComponent {
  notificationsChecked: Boolean = false;
  /**
   * Import left sidenav so we can access open close functions.
   */
  @Input() leftSidenav: MatSidenav;

  /**
   * Import right sidenav so we can access open close functions.
   */
  @Input() rightSidenav: MatSidenav;

  /**
   * Makes the toolbar transparent.
   */
  @Input() transparent: Boolean = false;

  constructor() { }

  openRightSidenav(): void {
    this.rightSidenav.open();
    this.notificationsChecked = true;
  }

  showMenuIcon(): boolean {
    return this.leftSidenav && !this.leftSidenav.opened;
  }
}
