import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { LayoutService } from './../../../../layouts/layout.service';

@Component({
  selector: 'portal-dashboard-issues-status',
  templateUrl: './issues-status.component.html',
  styleUrls: ['./issues-status.component.scss']
})
export class IssuesStatusComponent implements OnInit, OnDestroy {
  issuesTitle: string = 'Monthly';
  numberOfItems: number = 7;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 10
      }
    },
    tooltips: {
      enabled: true,
      xPadding: 20,
      yPadding: 10,
      displayColors: false,
      backgroundColor: '#03A9F4'
    },
    scales: {
      xAxes: [{
        display: false
      }]
    }
  };
  lineChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  lineChartDatasets: any[] = [
    {
      data: [],
      label: 'New'
    },
    {
      data: [],
      label: 'Done'
    },
    {
      data: [],
      label: 'Unresolved'
    }
  ];
  lineChartColors: any[] = [
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: '#19cbff',
      borderWidth: 1,
      lineTension: 0,
      pointBorderWidth: 1,
      pointBackgroundColor: '#19cbff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#03A9F4',
      pointHoverBorderColor: '#19cbff',
      pointRadius: [0, 0, 0, 4, 0, 0, 0]
    },
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: '#0d87c3',
      borderWidth: 1,
      lineTension: 0,
      pointBorderWidth: 1,
      pointBackgroundColor: '#0d87c3',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#03A9F4',
      pointHoverBorderColor: '#19cbff',
      pointRadius: [0, 0, 0, 4, 0, 0, 0]
    },
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: '#FF4081',
      borderWidth: 1,
      lineTension: 0,
      pointBorderWidth: 1,
      pointBackgroundColor: '#cc3367',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#FF4081',
      pointHoverBorderColor: '#fe4887',
      pointRadius: [0, 0, 0, 4, 0, 0, 0]
    }
  ];

  colorSubscription: Subscription;

  constructor(private layoutService: LayoutService) {
      this.lineChartDatasets[0].data = this.randomData(50, 100, this.numberOfItems, false);
      this.lineChartDatasets[1].data = this.randomData(30, 80, this.numberOfItems, false);
      this.lineChartDatasets[2].data = this.randomData(10, 60, this.numberOfItems, false);
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

  setNewData(): void {
    let _lineChartData: Array<any> = new Array(2);
    for (let i = 0; i < 3; i++) {
      _lineChartData[i] = {data: new Array(this.numberOfItems)};
    }
    _lineChartData[0].data = this.randomData(50, 100, this.numberOfItems, false);
    _lineChartData[1].data = this.randomData(30, 80, this.numberOfItems, false);
    _lineChartData[2].data = this.randomData(10, 60, this.numberOfItems, false);

    this.lineChartDatasets = _lineChartData;
  }

  changeSales(title: string) {
    this.setNewData();
    this.issuesTitle = title;
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
          const primaryLightColor = this.colorLuminance(theme.primary, 0.2);
          const primaryDarkColor = this.colorLuminance(theme.primary, -0.2);
          const secondaryLightColor = this.colorLuminance(theme.accent, 0.2);
          const secondaryDarkColor = this.colorLuminance(theme.accent, -0.2);
          const newChartColors = [...this.lineChartColors];

          newChartColors[0].borderColor = primaryLightColor;
          newChartColors[0].pointBackgroundColor = primaryLightColor;
          newChartColors[0].pointHoverBackgroundColor = theme.primary;
          newChartColors[0].pointHoverBorderColor = primaryLightColor;
          newChartColors[1].borderColor = primaryDarkColor;
          newChartColors[1].pointBackgroundColor = primaryDarkColor;
          newChartColors[1].pointHoverBackgroundColor = theme.primary;
          newChartColors[1].pointHoverBorderColor = primaryLightColor;
          newChartColors[2].borderColor = theme.accent;
          newChartColors[2].pointBackgroundColor = secondaryDarkColor;
          newChartColors[2].pointHoverBackgroundColor = theme.accent;
          newChartColors[2].pointHoverBorderColor = secondaryLightColor;
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
