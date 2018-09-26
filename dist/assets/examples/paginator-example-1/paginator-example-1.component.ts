import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'paginator-example-1',
  templateUrl: './paginator-example-1.component.html',
  styleUrls: ['./paginator-example-1.component.scss']
})
export class PaginatorExample1Component implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['number', 'rocket', 'payloads', 'customers'];
  upcomingDataSource: MatTableDataSource<Launch> = new MatTableDataSource();
  previousDataSource: MatTableDataSource<Launch> = new MatTableDataSource();

  @ViewChild('previousPaginator') previousPaginator: MatPaginator;
  @ViewChild('upcomingPaginator') upcomingPaginator: MatPaginator;

  previousSubscription: Subscription;
  upcomingSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.previousSubscription = this.http.get<Launch[]>('assets/data/dashboards/launches.json')
      .subscribe(launches => this.previousDataSource.data = launches);

    this.upcomingSubscription = this.http.get<Launch[]>('assets/data/dashboards/upcoming.json')
      .subscribe(launches => this.upcomingDataSource.data = launches);
  }

  ngAfterViewInit(): void {
    // Add paginators to datastore here, because we need the view to
    // have created the paginator elements
    this.upcomingDataSource.paginator = this.upcomingPaginator;
    this.previousDataSource.paginator = this.previousPaginator;
  }

  ngOnDestroy(): void {
    this.previousSubscription.unsubscribe();
    this.upcomingSubscription.unsubscribe();
  }

}

export interface Launch {
  flight_number: number;
  rocket: {
    rocket_name: string
  };
  payloads: [{
    payload_id: string,
    customers: string[]
  }];
}

