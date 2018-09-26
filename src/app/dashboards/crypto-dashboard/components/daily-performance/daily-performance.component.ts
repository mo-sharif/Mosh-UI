import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { LayoutService } from './../../../../layouts/layout.service';

@Component({
  selector: 'portal-dashboard-daily-performance',
  templateUrl: './daily-performance.component.html',
  styleUrls: ['./daily-performance.component.scss']
})
export class DailyPerformanceComponent implements OnInit {
  performanceTitle: string = 'Daily Performance';
  numberOfItems: number = 15;
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
      }]
    }
  };
  lineChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  lineChartDatasets: any[] = [
    {
      data: [],
      label: 'ETH'
    },
    {
      data: [],
      label: 'MSC'
    },
    {
      data: [],
      label: 'BTC'
    }
  ];
  lineChartColors: any[] = [
    {
      backgroundColor: '#19cbff',
      borderColor: '#19cbff',
      borderWidth: 2,
      lineTension: 0.45,
      fill: 'origin',
      pointRadius: 0
    },
    {
      backgroundColor: '#03A9F4',
      borderColor: '#03A9F4',
      borderWidth: 2,
      lineTension: 0.45,
      fill: 'origin',
      pointBorderWidth: 1,
      pointBackgroundColor: '#03A9F4',
      pointBorderColor: '#19cbff',
      pointHoverBackgroundColor: '#03A9F4',
      pointHoverBorderColor: '#19cbff',
      pointRadius: [0, 0, 0, 4, 0, 0, 0]
    },
    {
      backgroundColor: '#0d87c3',
      borderColor: '#0d87c3',
      borderWidth: 2,
      lineTension: 0.45,
      fill: 'origin',
      pointRadius: 0
    }
  ];

  colorSubscription: Subscription;

  constructor(private layoutService: LayoutService) {
    for (let i = 0; i <= this.numberOfItems; i++) {
      this.lineChartDatasets[0].data[i] = this.randomActiveUsers();
      this.lineChartDatasets[1].data[i] = this.randomActiveUsers();
      this.lineChartDatasets[2].data[i] = this.randomActiveUsers();
    }
  }

  randomActiveUsers(): number {
    return Math.floor((Math.random() * 100) + 1);
  }


  setNewData(): void {
    let _lineChartData: Array<any> = new Array(2);
    for (let i = 0; i < 3; i++) {
      _lineChartData[i] = {data: new Array(this.numberOfItems)};

      for (let j = 0; j < this.numberOfItems; j++) {
        _lineChartData[i].data[j] = this.randomActiveUsers();
      }
      this.lineChartDatasets = _lineChartData;
    }
  }

  changeSales(title: string) {
    this.setNewData();
    this.performanceTitle = title;
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
          const newChartColors = [...this.lineChartColors];
          newChartColors[0].backgroundColor = primaryLightColor;
          newChartColors[0].borderColor = primaryLightColor;
          newChartColors[1].backgroundColor = theme.primary;
          newChartColors[1].borderColor = theme.primary;
          newChartColors[1].pointBackgroundColor = theme.primary;
          newChartColors[1].pointBorderColor = primaryLightColor;
          newChartColors[1].pointHoverBackgroundColor = theme.primary;
          newChartColors[1].pointHoverBorderColor = primaryLightColor;
          newChartColors[2].backgroundColor = primaryDarkColor;
          newChartColors[2].borderColor = primaryDarkColor;
          this.lineChartColors = newChartColors;

          this.lineChartOptions.tooltips.backgroundColor = theme.primary;
          this.lineChartOptions.tooltips.titleFontColor = theme.accent;
        }
      });
  }
}
