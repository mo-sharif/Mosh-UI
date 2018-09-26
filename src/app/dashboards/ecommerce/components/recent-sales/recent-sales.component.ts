import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { Subscription } from 'rxjs/Subscription';
import { timer } from 'rxjs/observable/timer';

import { LayoutService } from './../../../../layouts/layout.service';

@Component({
  selector: 'portal-dashboard-recent-sales',
  templateUrl: './recent-sales.component.html',
  styleUrls: ['./recent-sales.component.scss']
})
export class RecentSalesComponent implements OnInit, OnDestroy {
  recentSales: BehaviorSubject<number> = new BehaviorSubject(this.randomRecentSales());
  // lineChart
  lineChartData: any[] = [];

  lineChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true,
      backgroundColor: '#00ABEE',
      titleFontColor: '#ffffff',
      bodyFontColor: 'rgba(255,255,255,0.6)',
      xPadding: 20,
      yPadding: 20,
      displayColors: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  };

  lineChartColors: any[] = [{
    backgroundColor: '#ff4081',
    borderColor: '#ff4081',
    borderWidth: '1',
    pointBackgroundColor: 'rgb(3, 169, 244)',
    pointHoverBackgroundColor: '#ff4081',
    pointHoverBorderColor: '#ff4081',
    pointBorderColor: '#FFFFFF',
    pointBorderWidth: 2,
    pointRadius: 3,
    lineTension: 0.0001,
    fill: 'origin'
  }];

  colorSubscription: Subscription;
  timerSubscription: Subscription;

  constructor(private layoutService: LayoutService) {
    const newChartData: any[] = [{
      data: []
    }];
    const days = 7;
    const today = new Date();
    for (let series = 0; series < newChartData.length; series++) {
      for (let i = 0; i < days; i++) {
        newChartData[series].data[i] = this.randomRecentSales();
      }
    }
    this.lineChartData = newChartData;
  }

  randomRecentSales(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  ngOnInit(): void {
    this.colorSubscription = this.layoutService.currentTheme()
      .subscribe((theme) => {
        if (null !== theme) {
          const newChartColors = [...this.lineChartColors];
          newChartColors[0].backgroundColor = theme.accent;
          newChartColors[0].borderColor = theme.accent;
          newChartColors[0].pointBackgroundColor = theme.primary;
          newChartColors[0].pointHoverBackgroundColor = theme.accent;
          newChartColors[0].pointHoverBorderColor = theme.accent;
          this.lineChartColors = newChartColors;

          this.lineChartOptions.tooltips.backgroundColor = theme.primary;
          this.lineChartOptions.tooltips.titleFontColor = theme.accent;
        }
      });

    this.timerSubscription = timer(0, 3000)
      .subscribe(() => {
        const newRecentSales  = this.randomRecentSales();
        const newData = [...this.lineChartData[0].data];
        this.recentSales.next(newRecentSales);
        newData.push(newRecentSales);
        newData.splice(0, 1);
        this.lineChartData = [{
          data: newData
        }];
      });
  }

  ngOnDestroy(): void {
    this.colorSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }
}
