import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map, delay } from 'rxjs/operators';

import { indigo } from './chart-widget-colors';

@Component({
  selector: 'example-charts-widget',
  templateUrl: './charts-widget.component.html',
  styleUrls: ['./charts-widget.component.scss']
})
export class ChartsWidgetComponent implements OnInit {
  chart$: Observable<any[]>;
  view: any[];
  showXAxis: boolean;
  showYAxis: boolean;
  gradient: boolean;
  showLegend: boolean;
  autoScale: boolean;
  legendTitle: string;
  showXAxisLabel: boolean;
  xAxisLabel: string;
  showYAxisLabel: boolean;
  yAxisLabel: string;
  barPadding: number;
  groupPadding: number;

  colorScheme: any = indigo;

  constructor(private http: Http) {
    // options
    this.showXAxis = true;
    this.showYAxis = true;
    this.gradient = false;
    this.showLegend = false;
    this.legendTitle = 'Exchange Rates';
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Currencies';
    this.showYAxisLabel = true;
    this.yAxisLabel = 'Euro';
    this.barPadding = 0;
    this.groupPadding = 0;
    this.autoScale = true;

    this.chart$ = this.http.get('assets/data/dashboards/charts.json')
      .pipe(
        map((response: Response) => response.json()),
        map((data: any) => this.prepareChartData(data))
      );
  }

  ngOnInit(): void {
  }

  onSelect(event: Event): void {
    console.log(event);
  }

  prepareChartData(data: any[]): any {
    return data.map(entry => ({
      'name': entry.date,
      'series': [{
        'name': 'low',
        'value': entry.low
      }, {
        'name': 'close',
        'value': entry.close
      }, {
        'name': 'high',
        'value': entry.high
      }]
    }));
  }

}
