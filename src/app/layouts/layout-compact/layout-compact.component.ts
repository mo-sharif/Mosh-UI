import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { LayoutService } from './../layout.service';

@Component({
  selector: 'portal-layout-compact',
  templateUrl: './layout-compact.component.html',
  styleUrls: ['./layout-compact.component.scss']
})
export class LayoutCompactComponent implements OnInit, OnDestroy {
  /**
   * Stores if left sidenav is open.
   */
  leftSidenavOpen: boolean;

  /**
   * Stores left sidenav display mode.
   */
  leftSidenavMode: string;

  /**
   * Stores media observable subscription.
   */
  mediaSubscription: Subscription;

  constructor(
    private media: ObservableMedia,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    // Get initial state of the sidenav.
    this.calculateSidenavStatus();

    // Subscribe to changes in screen size to change sidenav behavior.
    this.mediaSubscription = this.media
      .subscribe((change: MediaChange) => this.calculateSidenavStatus());
  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }

  calculateSidenavStatus(): void {
    const isMobile = this.media.isActive('lt-md');
    // Close sidenav on mobile.
    this.leftSidenavOpen = !isMobile;
    // Make sidenav open over content on mobile.
    this.leftSidenavMode = isMobile ? 'over' : 'side';
  }
}
