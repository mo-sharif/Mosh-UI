import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

// Shared
import { SharedModule } from './../shared/shared.module';
import { routing } from './dashboards-routing.module';

// Dashboards
import { DashboardComponent } from './analytics/analytics.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CryptoDashboardComponent } from './crypto-dashboard/crypto-dashboard.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';

// Components
import { TicketsWidgetComponent } from './analytics/components/tickets-widget/tickets-widget.component';
import { ChartsWidgetComponent } from './analytics/components/charts-widget/charts-widget.component';
import { MapsWidgetComponent } from './analytics/components/maps-widget/maps-widget.component';
import { TableWidgetComponent } from './analytics/components/table-widget/table-widget.component';
import { ContactsWidgetComponent } from './analytics/components/contacts-widget/contacts-widget.component';
import { TodoWidgetComponent } from './analytics/components/todo-widget/todo-widget.component';
import { NewsWidgetComponent } from './analytics/components/news-widget/news-widget.component';
import { WeatherWidgetComponent } from './analytics/components/weather-widget/weather-widget.component';
import { CalendarWidgetComponent } from './analytics/components/calendar-widget/calendar-widget.component';
import { TabbedChartWidgetComponent } from './analytics/components/tabbed-chart-widget/tabbed-chart-widget.component';
import { ActiveUsersComponent } from './analytics/components/active-users/active-users.component';
import { CommerceActiveUsersComponent } from './ecommerce/components/commerce-active-users/commerce-active-users.component';
import { RecentSalesComponent } from './ecommerce/components/recent-sales/recent-sales.component';
import { NewCustomersComponent } from './ecommerce/components/new-customers/new-customers.component';
import { DailySalesComponent } from './ecommerce/components/daily-sales/daily-sales.component';
import { ProductSalesComponent } from './ecommerce/components/product-sales/product-sales.component';
import { CommerceMapComponent } from './ecommerce/components/commerce-map/commerce-map.component';
import { DailyPerformanceComponent } from './crypto-dashboard/components/daily-performance/daily-performance.component';
import { AnnualPerformanceComponent } from './crypto-dashboard/components/annual-performance/annual-performance.component';
import { MostPopularComponent } from './crypto-dashboard/components/most-popular/most-popular.component';
import { MarketCapComponent } from './crypto-dashboard/components/market-cap/market-cap.component';
import { DoughnutChartWidgetComponent } from './analytics/components/doughnut-chart-widget/doughnut-chart-widget.component';
import { GdaxTickerComponent } from './crypto-dashboard/components/gdax-ticker/gdax-ticker.component';
import { WeeklyIssuesComponent } from './project-dashboard/components/weekly-issues/weekly-issues.component';
import { IssuesStatusComponent } from './project-dashboard/components/issues-status/issues-status.component';
import { BacklogDashboardComponent } from './project-dashboard/components/backlog/backlog.component';
import { UserTasksComponent } from './project-dashboard/components/user-tasks/user-tasks.component';
import { ProjectStatesComponent } from './project-dashboard/components/project-states/project-states.component';

// Directives
import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [
    routing,
    SharedModule,
    HttpClientModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXVUKDvaxn13Atl_SPuQj2g5MK-C1RYRs'
    }),
  ],
  declarations: [
    DashboardComponent,
    EcommerceComponent,
    TicketsWidgetComponent,
    ChartsWidgetComponent,
    MapsWidgetComponent,
    TableWidgetComponent,
    ContactsWidgetComponent,
    TodoWidgetComponent,
    NewsWidgetComponent,
    CounterDirective,
    WeatherWidgetComponent,
    CalendarWidgetComponent,
    TabbedChartWidgetComponent,
    ActiveUsersComponent,
    CommerceActiveUsersComponent,
    RecentSalesComponent,
    NewCustomersComponent,
    DailySalesComponent,
    ProductSalesComponent,
    CommerceMapComponent,
    DailyPerformanceComponent,
    AnnualPerformanceComponent,
    DoughnutChartWidgetComponent,
    CryptoDashboardComponent,
    ProjectDashboardComponent,
    MostPopularComponent,
    MarketCapComponent,
    GdaxTickerComponent,
    WeeklyIssuesComponent,
    IssuesStatusComponent,
    BacklogDashboardComponent,
    UserTasksComponent,
    ProjectStatesComponent
  ]
})
export class DashboardsModule { }
