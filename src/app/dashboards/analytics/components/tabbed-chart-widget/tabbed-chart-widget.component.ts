import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { Subscription } from 'rxjs/Subscription';

import { LayoutService } from './../../../../layouts/layout.service';

@Component({
  selector: 'portal-dashboard-tabbed-chart-widget',
  templateUrl: './tabbed-chart-widget.component.html',
  styleUrls: ['./tabbed-chart-widget.component.scss']
})
export class TabbedChartWidgetComponent implements OnInit, OnDestroy {
  tabs: Tab[] = [{
    title: 'Users',
    value: '2.9K',
    change: 0.23,
    min: 200,
    max: 2000,
  }, {
    title: 'Revenue',
    value: '$2,987',
    change: -0.56,
    min: 1400,
    max: 3000,
  }, {
    title: 'Conversion Rate',
    value: '0.24%',
    change: 0.29,
    min: 0,
    max: 100,
  }, {
    title: 'Sessions',
    value: '5.2K',
    change: 0.79,
    min: 0,
    max: 6000,
  }];

  activeTab: Tab = this.tabs[0];

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
    }
  };

  lineChartColors: any[] = [{
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#00ABEE',
    borderWidth: '2',
    pointBackgroundColor: '#FF397C',
    pointBorderColor: '#FF397C',
    lineTension: 0.45
  }];

  colorSubscription: Subscription;

  constructor(private layoutService: LayoutService) {
    this.changeTab(this.activeTab);
  }

  ngOnInit(): void {
    this.colorSubscription = this.layoutService.currentTheme()
      .subscribe((theme) => {
        if (null !== theme) {
          const newChartColors = [...this.lineChartColors];
          newChartColors[0].borderColor = theme.primary;
          newChartColors[0].pointBackgroundColor = theme.accent;
          newChartColors[0].pointBorderColor = theme.accent;
          this.lineChartColors = newChartColors;

          this.lineChartOptions.tooltips.backgroundColor = theme.primary;
          this.lineChartOptions.tooltips.titleFontColor = theme.accent;
        }
      });
  }

  ngOnDestroy(): void {
    this.colorSubscription.unsubscribe();
  }

  changeTab(tab: Tab): void {
    const newChartData: any[] = [{
      label: tab.title,
      data: []
    }];

    const days = 7;
    const today = new Date();
    for (let series = 0; series < newChartData.length; series++) {
      for (let i = 0; i < days; i++) {
        newChartData[series].data[i] = Math.floor(Math.random() * tab.max) + tab.min;
      }
    }

    this.lineChartData = newChartData;
    this.activeTab = tab;
  }
}


interface Tab {
  title: string;
  value: string;
  change: number;
  min: number;
  max: number;
}
