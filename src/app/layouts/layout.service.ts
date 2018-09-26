import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter, mergeMap, startWith, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LayoutService {
  private title$: BehaviorSubject<string> = new BehaviorSubject('');
  private loaderStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private currentTheme$: BehaviorSubject<any> = new BehaviorSubject(null);
  private direction$: BehaviorSubject<string>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Set direction from session if set.
    const sessionDirection = sessionStorage.getItem('portal-direction');
    const direction = sessionDirection && sessionDirection === 'rtl' ? 'rtl' : 'ltr';
    this.direction$ = new BehaviorSubject(direction);

    // Watch for router events to turn on/off the loader.
    this.router.events
      .subscribe((event: any) => {
        if (event instanceof NavigationStart) {
          this.loaderStatus$.next(true);
        } else if (event instanceof NavigationEnd) {
          this.loaderStatus$.next(false);
        }
      });

    // Watch for router events to set title using route data.
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        startWith(this.activatedRoute),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        if (data['title']) {
          this.setTitle(data['title']);
        }
      });
  }

  setTitle(title: string): void {
    this.title$.next(title);
  }

  getTitle(): Observable<string> {
    return this.title$.asObservable();
  }

  setLoader(status: boolean): void {
    this.loaderStatus$.next(status);
  }

  getLoader(): Observable<boolean> {
    return this.loaderStatus$.asObservable();
  }

  toggleDirection(): void {
    const direction = this.direction$.getValue() === 'rtl' ? 'ltr' : 'rtl';
    sessionStorage.setItem('portal-direction', direction);
    this.direction$.next(direction);
  }

  getDirection(): Observable<string> {
    return this.direction$.asObservable();
  }

  isRTL(): Observable<boolean> {
    return this.direction$.asObservable()
      .pipe(
        switchMap(direction => of(direction === 'rtl'))
      );
  }

  currentTheme(): Observable<any> {
    return this.currentTheme$.asObservable();
  }

  setCurrentTheme(theme: any): void {
    this.currentTheme$.next(theme);
  }
}
