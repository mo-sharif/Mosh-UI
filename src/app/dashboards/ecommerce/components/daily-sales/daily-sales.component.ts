import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

import { LayoutService } from './../../../../layouts/layout.service';

@Component({
  selector: 'portal-dashboard-daily-sales',
  templateUrl: './daily-sales.component.html',
  styleUrls: ['./daily-sales.component.scss']
})
export class DailySalesComponent implements OnInit, OnDestroy {
  @ViewChild(BaseChartDirective) chartElement: BaseChartDirective;
  salesTitle: string = 'Daily Sales';
  numberOfBars: number = 15;
  barChartOptions: any = {
    animation: {
      duration: 300,
      easing: 'linear'
    },
    scaleShowVerticalLines: false,
    responsive: true,
    tooltips: {
      enabled: true,
      xPadding: 20,
      yPadding: 10,
      displayColors: false,
      backgroundColor: '#03a9f4'
    },
    scales: {
      xAxes: [{
        display: false,
        stacked: true
      }],
      yAxes: [{
        display: false,
        stacked: true
      }]
    }
  };
  barChartLabels: string[] = [];
  barChartDatasets: any[] = [
    {
      data: [],
      label: 'Views'
    },
    {
      data: [],
      label: 'Sales'
    }
  ];
  barChartColors: any[] = [
    {
      backgroundColor: '#03a9f4',
      borderColor: '#03a9f4'
    },
    {
      backgroundColor: '#ff4081',
      borderColor: '#ff4081'
    }
  ];

  colorSubscription: Subscription;

  constructor(private layoutService: LayoutService) {
    for (let i = 0; i <= this.numberOfBars; i++) {
      this.barChartLabels[i] = (this.numberOfBars - i) + 1  + ' min ago';
      this.barChartDatasets[0].data[i] = this.randomDailySales();
      this.barChartDatasets[1].data[i] = Math.floor(this.randomDailySales() / 2);
    }
  }

  randomDailySales(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  setNewData(): void {
    const _barChartData: Array<any> = new Array(2);
    for (let i = 0; i < 2; i++) {
      _barChartData[i] = {data: new Array(this.numberOfBars)};

      for (let j = 0; j < this.numberOfBars; j++) {
        _barChartData[i].data[j] = this.randomDailySales();
      }
      this.barChartDatasets = _barChartData;
    }
  }

  changeSales(title: string): void {
    this.setNewData();
    this.salesTitle = title;
  }

  ngOnInit(): void {
    this.colorSubscription = this.layoutService.currentTheme()
      .subscribe((theme) => {
        if (null !== theme) {
          const newChartColors = [...this.barChartColors];
          newChartColors[0].backgroundColor = theme.primary;
          newChartColors[0].borderColor = theme.primary;
          newChartColors[1].backgroundColor = theme.accent;
          newChartColors[1].borderColor = theme.accent;
          this.barChartColors = newChartColors;

          this.barChartOptions.tooltips.backgroundColor = theme.primary;
          this.barChartOptions.tooltips.titleFontColor = theme.accent;
        }
      });
  }

  ngOnDestroy(): void {
    this.colorSubscription.unsubscribe();
  }
}
