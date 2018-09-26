import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy, ElementRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import * as CountUp from 'countup.js/dist/countUp';

@Directive({
  selector: '[portalCount]'
})
export class CounterDirective implements OnInit, OnDestroy {
  @Input() countFrom: Number = 0;
  @Input() countTo: BehaviorSubject<number> = new BehaviorSubject(0);
  @Input() countOptions: CountUpOptions = {};

  @Output() finished: EventEmitter<BehaviorSubject<number>> = new EventEmitter();

  private countUp: CountUp;
  private countSubscription: Subscription;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.countUp = new CountUp(
      this.el.nativeElement,
      this.countFrom,
      this.countFrom,
      this.countOptions.numDecimals,
      this.countOptions.delay
    );

    this.countUp.callback = this.countFinished.bind(this);

    this.countSubscription = this.countTo.subscribe(value => {
      if (null !== value) {
        this.countUp.update(value);
      }
    });
  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe();
  }

  countFinished(): void {
    this.finished.emit(this.countTo);
  }
}

interface CountUpOptions {
  numDecimals?: number;
  delay?: number;
  useEasing?: boolean;
  useGrouping?: boolean;
  separator?: string;
  decimal?: string;
  easingFn?: Function;
  formattingFn?: Function;
  prefix?: string;
  suffix?: string;
  numerals?: string[];
}
