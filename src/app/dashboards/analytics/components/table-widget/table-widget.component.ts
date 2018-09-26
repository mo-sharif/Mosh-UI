import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'portal-dashboard-table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss'],
})
export class TableWidgetComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['page', 'pageviews', 'duration', 'conversion'];
  genericDataSource: MatTableDataSource<Visit> = new MatTableDataSource();
  paidDataSource: MatTableDataSource<Visit> = new MatTableDataSource();

  @ViewChild('paidPaginator') paidPaginator: MatPaginator;
  @ViewChild('genericPaginator') genericPaginator: MatPaginator;

  previousSubscription: Subscription;
  upcomingSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.previousSubscription = this.http.get<Visit[]>('assets/data/dashboards/paid-search.json')
      .subscribe(visits => this.paidDataSource.data = visits);

    this.upcomingSubscription = this.http.get<Visit[]>('assets/data/dashboards/generic-search.json')
      .subscribe(visits => this.genericDataSource.data = visits);
  }

  ngAfterViewInit(): void {
    // Add paginators to datastore here, because we need the view to
    // have created the paginator elements
    this.genericDataSource.paginator = this.genericPaginator;
    this.paidDataSource.paginator = this.paidPaginator;
  }

  ngOnDestroy(): void {
    this.previousSubscription.unsubscribe();
    this.upcomingSubscription.unsubscribe();
  }
}

export interface Visit {
  url: string;
  views: number;
  duration: string;
  conversion: string;
}
