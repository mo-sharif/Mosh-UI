import { Directive, ElementRef } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { filter, delay } from 'rxjs/operators';

@Directive({
  selector: '[portalScrollTop]'
})
export class PortalScrollTopDirective implements OnDestroy {
  private routerSubscription: Subscription;
  // check again once this is merged: https://github.com/angular/angular/pull/20030
  constructor(private router: Router, private el: ElementRef) {
    this.routerSubscription = this.router.events
    .pipe(
      filter(event => event instanceof NavigationStart),
      delay(0)
    )
    .subscribe(route => {
      this.el.nativeElement.scrollTop = 0;
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
