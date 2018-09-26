import { filter } from 'rxjs/operators';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'portal-vertical-icon-menu',
  templateUrl: './vertical-icon-menu.component.html',
  styleUrls: ['./vertical-icon-menu.component.scss']
})
export class VerticalIconMenuComponent implements OnDestroy {
  /**
   * Import material sidenav so we can access open close functions.
   */
  @Input() sidenav: MatSidenav;
  routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
      )
      .subscribe((event: RouterEvent) => {
        if (this.sidenav && this.sidenav.mode === 'over' && this.sidenav.opened) {
          this.sidenav.close();
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
