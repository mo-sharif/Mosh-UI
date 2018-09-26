import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { MatSidenav } from '@angular/material';

import { switchMap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'portal-notification-sidenav',
  templateUrl: './notification-sidenav.component.html',
  styleUrls: ['./notification-sidenav.component.scss'],
})
export class NotificationSidenavComponent implements OnInit {
  /**
   * Import material sidenav so we can access open close functions.
   */
  @Input() sidenav: MatSidenav;

  /**
   * Stores todays date for top title.
   */
  todaysDate: Date = new Date();

  /**
   * Stores an observable of forecast data.
   */
  weatherForecasts$: Observable<any[]>;

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.sidenav.onOpen
      .subscribe(() => this.fetchWeather());
  }

  fetchWeather(): void {
    const query = 'select location,item.condition from weather.forecast where woeid in ' +
      '(select woeid from geo.places(1) where text="London" OR text="New York" OR text="Sydney")';
    const url = 'https://query.yahooapis.com/v1/public/yql?q=' +
      encodeURIComponent(query) +
      '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

    this.weatherForecasts$ = this.http.get(url)
      .pipe(
        switchMap((response: Response) =>
          new Observable(observer => {
            // Get response
            const data = response.json();
            // Add data to array of forecasts.
            let weatherForecasts = [];
            if (data.query.count > 0) {
              weatherForecasts = data.query.results.channel.map(place => {
                return {
                  city: place.location.city,
                  text: place.item.condition.text,
                  temp: place.item.condition.temp,
                  code: place.item.condition.code
                };
              });
            }
            return observer.next(weatherForecasts);
          })
        )
      );
  }
}
