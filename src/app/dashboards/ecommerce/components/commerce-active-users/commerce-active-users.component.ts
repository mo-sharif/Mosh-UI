import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { timer } from 'rxjs/observable/timer';

import { LayoutService } from './../../../../layouts/layout.service';

@Component({
  selector: 'portal-dashboard-commerce-active-users',
  templateUrl: './commerce-active-users.component.html',
  styleUrls: ['./commerce-active-users.component.scss']
})
export class CommerceActiveUsersComponent implements OnInit, OnDestroy {
  @ViewChild(BaseChartDirective) chartElement: BaseChartDirective;
  commerceActiveUsers: BehaviorSubject<number> = new BehaviorSubject(this.randomActiveUsers());
  numberOfBars: number = 15;
  barChartOptions: any = {
    animation: false,
    scaleShowVerticalLines: false,
    responsive: false,
    tooltips: {
      enabled: false
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
    backgroundColor: '#03a9f4',
    borderColor: '#03a9f4',
    hoverBackgroundColor: '#ff4081'
  }];

  colorSubscription: Subscription;
  timerSubscription: Subscription;

  constructor(private layoutService: LayoutService) {
    for (let i = 0; i <= this.numberOfBars; i++) {
      this.barChartLabels[i] = (this.numberOfBars - i) + 1  + ' min ago';
      this.barChartDatasets[0].data[i] = this.randomActiveUsers();
    }
  }

  randomActiveUsers(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  ngOnInit(): void {
    this.colorSubscription = this.layoutService.currentTheme()
      .subscribe((theme) => {
        if (null !== theme) {
          const newChartColors = [...this.barChartColors];
          newChartColors[0].backgroundColor = theme.primary;
          newChartColors[0].borderColor = theme.primary;
          newChartColors[0].hoverBackgroundColor = theme.accent;
          this.barChartColors = newChartColors;

          this.barChartOptions.tooltips.backgroundColor = theme.primary;
          this.barChartOptions.tooltips.titleFontColor = theme.accent;
        }
      });

    this.timerSubscription = timer(0, 3000)
      .subscribe(() => {
        const newActiveUsers  = this.randomActiveUsers();
        const newData = [...this.barChartDatasets[0].data];
        this.commerceActiveUsers.next(newActiveUsers);
        newData.push(newActiveUsers);
        newData.splice(0, 1);
        this.barChartDatasets = [{
          label: this.barChartDatasets[0].label,
          data: newData
        }];
      });
  }

  ngOnDestroy(): void {
    this.colorSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }
}
