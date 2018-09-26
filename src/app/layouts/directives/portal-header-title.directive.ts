import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LayoutService } from './../layout.service';

@Directive({
  selector: '[portalHeaderTitle]'
})
export class PortalHeaderTitleDirective implements OnDestroy {
  titleSubscription: Subscription;

  constructor(
    private layoutService: LayoutService,
    private el: ElementRef
  ) {
    this.titleSubscription = this.layoutService.getTitle()
      .subscribe(title => this.el.nativeElement.innerHTML = title);
  }

  ngOnDestroy(): void {
    this.titleSubscription.unsubscribe();
  }
}
