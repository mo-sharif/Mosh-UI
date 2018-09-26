import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewChild } from '@angular/core';

import * as moment from 'moment';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'portal-dashboard-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  @ViewChild(BaseChartDirective) chartElement: BaseChartDirective;
  activeUsers: BehaviorSubject<number> = new BehaviorSubject(this.randomActiveUsers());
  numberOfBars: number = 15;
  barChartOptions: any = {
    animation: false,
    scaleShowVerticalLines: false,
    responsive: true,
    tooltips: {
      enabled: true,
      backgroundColor: '#ffffff',
      titleFontColor: '#00ABEE',
      bodyFontColor: 'rgba(0, 171, 238, 0.6)',
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
  barChartLabels: string[] = [];
  barChartDatasets: any[] = [
    {
      data: [],
      label: 'Page views'
    }
  ];
  barChartColors: any[] = [{
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }];

  constructor() {
    for (let i = 0; i <= this.numberOfBars; i++) {
      this.barChartLabels[i] = (this.numberOfBars - i) + 1  + ' min ago';
      this.barChartDatasets[0].data[i] = this.randomActiveUsers();
    }
  }

  randomActiveUsers(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  ngOnInit(): void {
    timer(0, 3000)
      .subscribe(() => {
        const newActiveUsers  = this.randomActiveUsers();
        const newData = [...this.barChartDatasets[0].data];
        this.activeUsers.next(newActiveUsers);
        newData.push(newActiveUsers);
        newData.splice(0, 1);
        this.barChartDatasets = [{
          label: this.barChartDatasets[0].label,
          data: newData
        }];
      });
  }
}
