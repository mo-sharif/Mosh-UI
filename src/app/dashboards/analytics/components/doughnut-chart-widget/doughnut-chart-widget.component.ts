import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { Subscription } from 'rxjs/Subscription';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { LayoutService } from './../../../../layouts/layout.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'portal-dashboard-doughnut-chart-widget',
  templateUrl: './doughnut-chart-widget.component.html',
  styleUrls: ['./doughnut-chart-widget.component.scss']
})
export class DoughnutChartWidgetComponent implements OnInit, OnDestroy {
  doughnutChartData: any[] = [124, 88, 172];
  doughnutChartLabels: any[] = ['Desktop', 'Tablet', 'Mobile'];
  deviceSessions: BehaviorSubject<number>[] = [124, 88, 172].map(el => new BehaviorSubject(el));

  doughnutChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true,
      backgroundColor: '#00ABEE',
      titleFontColor: '#ffffff',
      bodyFontColor: '#ffffff',
      xPadding: 20,
      yPadding: 20,
      displayColors: false
    }
  };

  doughnutChartColors: any[] = [{
    borderWidth: 0,
    backgroundColor: ['#00abee', '#33bcf1', '#66cdf5']
  }];

  colorSubscription: Subscription;

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.colorSubscription = this.layoutService.currentTheme()
      .subscribe((theme) => {
        if (null !== theme) {
          const newChartColors = [...this.doughnutChartColors];
          newChartColors[0].backgroundColor = newChartColors[0].backgroundColor
            .map((color, index) => this.shadeColor(theme.primary, -index * 0.1));
          newChartColors[0].borderColor = theme.accent;
          this.doughnutChartColors = newChartColors;

          this.doughnutChartOptions.tooltips.backgroundColor = theme.primary;
          this.doughnutChartOptions.tooltips.titleFontColor = theme.accent;
        }
      });

    timer(0, 4000)
      .subscribe(() => {
        const numberOfItems = this.doughnutChartData.length;
        const newChartData = [];
        for (let i = 0; i < numberOfItems; i++) {
          newChartData.push(Math.floor(Math.random() * 30));
        }
        this.deviceSessions.forEach((subject, index) => subject.next(newChartData[index]));
        this.doughnutChartData = newChartData;
      });
  }

  ngOnDestroy(): void {
    this.colorSubscription.unsubscribe();
  }

  shadeColor(color: string, percent: number): string {
    const f = parseInt(color.slice(1), 16),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = f >> 16,
    G = f >> 8 & 0x00FF,
    B = f & 0x0000FF;
    return '#' +
      (0x1000000
        + (Math.round((t - R) * p) + R) * 0x10000
        + (Math.round((t - G) * p) + G) * 0x100
        + (Math.round((t - B) * p) + B)
      ).toString(16).slice(1);
  }
}
