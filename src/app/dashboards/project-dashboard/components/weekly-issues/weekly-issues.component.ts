import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { LayoutService } from './../../../../layouts/layout.service';

@Component({
  selector: 'portal-dashboard-weekly-issues',
  templateUrl: './weekly-issues.component.html',
  styleUrls: ['./weekly-issues.component.scss']
})
export class WeeklyIssuesComponent implements OnInit, OnDestroy {
  numberOfItems: number = 7;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 12
      }
    },
    tooltips: {
      enabled: true,
      xPadding: 5,
      yPadding: 5,
      displayColors: false,
      backgroundColor: '#03A9F4'
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
  lineChartLabels: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  lineChartDatasets: any[] = [
    {
      data: [],
      label: 'Open'
    },
    {
      data: [],
      label: 'Closed'
    },
  ];
  lineChartColors: any[] = [
    {
      backgroundColor: '#19cbff',
      borderColor: '#19cbff',
      borderWidth: 2,
      pointBackgroundColor: '#19cbff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#cc3367',
      pointHoverBorderColor: '#FF4081',
      lineTension: 0,
      pointBorderWidth: 1,
      pointRadius: 3,
      fill: 'start'
    },
    {
      backgroundColor: '#03A9F4',
      borderColor: '#03A9F4',
      borderWidth: 2,
      pointBackgroundColor: '#0d87c3',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#cc3367',
      pointHoverBorderColor: '#FF4081',
      lineTension: 0,
      pointBorderWidth: 1,
      pointRadius: 3,
      fill: 'start'
    }
  ];

  colorSubscription: Subscription;

  constructor(private layoutService: LayoutService) {
    this.lineChartDatasets[0].data = this.randomData(10, 50, this.numberOfItems, false);
    this.lineChartDatasets[1].data = this.randomData(50, 100, this.numberOfItems, false);
  }

  randomData(min, max, count, firstZero): number[] {
    const data = [];
    for (let x = 0; x < count; x++) {
      const element = data[x];
      data[x] = min + Math.round(Math.random() * max);
    }
    if (firstZero === true) {
      data[0] = 0;
    }
    return data;
  }

  // Changes the opacity of a hex colour.
  colorLuminance(hex, lum): string {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;
    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }
    return rgb;
  }

  ngOnInit(): void {
    this.colorSubscription = this.layoutService.currentTheme()
      .subscribe((theme) => {
        if (null !== theme) {
          const primaryDarkColor = this.colorLuminance(theme.primary, -0.2);
          const secondaryDarkColor = this.colorLuminance(theme.accent, -0.2);
          const newChartColors = [...this.lineChartColors];
          newChartColors[0].backgroundColor = theme.primary;
          newChartColors[0].borderColor = theme.primary;
          newChartColors[0].pointBackgroundColor = theme.primary;
          newChartColors[0].pointHoverBackgroundColor = secondaryDarkColor;
          newChartColors[0].pointHoverBorderColor = theme.accent;
          newChartColors[1].backgroundColor = primaryDarkColor;
          newChartColors[1].borderColor = primaryDarkColor;
          newChartColors[1].pointBackgroundColor = primaryDarkColor;
          newChartColors[1].pointHoverBackgroundColor = secondaryDarkColor;
          newChartColors[1].pointHoverBorderColor = theme.accent;
          this.lineChartColors = newChartColors;

          this.lineChartOptions.tooltips.backgroundColor = theme.primary;
          this.lineChartOptions.tooltips.titleFontColor = theme.accent;
        }
      });
  }

  ngOnDestroy(): void {
    this.colorSubscription.unsubscribe();
  }
}
