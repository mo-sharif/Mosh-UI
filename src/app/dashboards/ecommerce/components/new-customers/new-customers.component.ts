import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { Subscription } from 'rxjs/Subscription';
import { timer } from 'rxjs/observable/timer';

import { LayoutService } from './../../../../layouts/layout.service';

@Component({
  selector: 'portal-dashboard-new-customers',
  templateUrl: './new-customers.component.html',
  styleUrls: ['./new-customers.component.scss']
})
export class NewCustomersComponent implements OnInit, OnDestroy {
  newCustomers: BehaviorSubject<number> = new BehaviorSubject(this.randomNewCustomers());
  // lineChart
  lineChartData: any[] = [];

  lineChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
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
    backgroundColor: '#03a9f4',
    borderColor: '#03a9f4',
    borderWidth: '2',
    pointRadius: 0,
    lineTension: 0.45,
    fill: 'start'
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
        newChartData[series].data[i] = this.randomNewCustomers();
      }
    }
    this.lineChartData = newChartData;
  }

  randomNewCustomers(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  ngOnInit(): void {
    this.colorSubscription = this.layoutService.currentTheme()
      .subscribe((theme) => {
        if (null !== theme) {
          const newChartColors = [...this.lineChartColors];
          newChartColors[0].backgroundColor = theme.primary;
          newChartColors[0].borderColor = theme.primary;
          this.lineChartColors = newChartColors;
        }
      });

    this.timerSubscription = timer(0, 3000)
      .subscribe(() => {
        const newCustomers = this.randomNewCustomers();
        const newData = [...this.lineChartData[0].data];
        this.newCustomers.next(newCustomers);
        newData.push(newCustomers);
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
