import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { LayoutService } from './../../../../layouts/layout.service';

@Component({
  selector: 'portal-dashboard-annual-performance',
  templateUrl: './annual-performance.component.html',
  styleUrls: ['./annual-performance.component.scss']
})
export class AnnualPerformanceComponent implements OnInit {
  performanceTitle: string = 'Annual';

  barChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
      xPadding: 5,
      yPadding: 5,
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
  barChartLabels: string[] = ['BTC', 'ETH', 'MAT', 'ATN', 'JLG', 'AFT', 'KOL', 'JNH', 'AAG', 'JSG', 'LLK', 'GRE', 'SMG', 'LLM'];
  barChartDatasets: any[] = [
    {
      data: [
        8349,
        7508.79,
        6450.6,
        6001.23,
        5502.14,
        5203.55,
        4846.25,
        4479.22,
        3826.88,
        3546,
        2234.78,
        2145.18,
        2069.854,
        1956.18
      ],
      label: 'Price'
    }
  ];
  barChartColors: any[] = [
    {
      backgroundColor: [this.colorLuminance('#03A9F4', -0.3), this.colorLuminance('#03A9F4', -0.2), this.colorLuminance('#03A9F4', -0.1), '#03A9F4', this.colorLuminance('#03A9F4', 0.1), this.colorLuminance('#03A9F4', 0.2), this.colorLuminance('#03A9F4', 0.3), this.colorLuminance('#03A9F4', 0.4), this.colorLuminance('#03A9F4', 0.5), this.colorLuminance('#03A9F4', 0.6), this.colorLuminance('#03A9F4', 0.7), this.colorLuminance('#03A9F4', 0.8), this.colorLuminance('#03A9F4', 0.9), this.colorLuminance('#03A9F4', 0.95)],
      borderColor: '#03A9F4',
      hoverBackgroundColor: '#FF4081'
    }
  ];

  colorSubscription: Subscription;

  constructor(private layoutService: LayoutService) {}

  randomActiveUsers(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  setNewData(): void {
    const numberOfData = this.barChartDatasets[0].data.length;
    let _barChartDataset = new Array(1);
    _barChartDataset[0] = {data: new Array(numberOfData)};

    for (let j = 0; j < numberOfData; j++) {
      _barChartDataset[0].data[j] = this.randomActiveUsers();
    }
    this.barChartDatasets = _barChartDataset;

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
          const newChartColors = [...this.barChartColors];
          newChartColors[0].backgroundColor = [this.colorLuminance(theme.primary, -0.3), this.colorLuminance(theme.primary, -0.2), this.colorLuminance(theme.primary, -0.1), theme.primary, this.colorLuminance(theme.primary, 0.1), this.colorLuminance(theme.primary, 0.2), this.colorLuminance(theme.primary, 0.3), this.colorLuminance(theme.primary, 0.4), this.colorLuminance(theme.primary, 0.5), this.colorLuminance(theme.primary, 0.6), this.colorLuminance(theme.primary, 0.7), this.colorLuminance(theme.primary, 0.8), this.colorLuminance(theme.primary, 0.9), this.colorLuminance(theme.primary, 0.95)];
          newChartColors[0].borderColor = [this.colorLuminance(theme.primary, -0.3), this.colorLuminance(theme.primary, -0.2), this.colorLuminance(theme.primary, -0.1), theme.primary, this.colorLuminance(theme.primary, 0.1), this.colorLuminance(theme.primary, 0.2), this.colorLuminance(theme.primary, 0.3), this.colorLuminance(theme.primary, 0.4), this.colorLuminance(theme.primary, 0.5), this.colorLuminance(theme.primary, 0.6), this.colorLuminance(theme.primary, 0.7), this.colorLuminance(theme.primary, 0.8), this.colorLuminance(theme.primary, 0.9), this.colorLuminance(theme.primary, 0.95)];
          newChartColors[0].hoverBackgroundColor = theme.accent;
          this.barChartColors = newChartColors;
        }
      });
  }
}
