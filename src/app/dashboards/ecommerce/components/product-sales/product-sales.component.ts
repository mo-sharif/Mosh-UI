import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'portal-dashboard-product-sales',
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.scss'],
})
export class ProductSalesComponent implements OnDestroy {
  displayedColumns: string[] = ['photo', 'product', 'salesIncrease', 'sales', 'discount', 'stock'];
  salesDataSource: MatTableDataSource<Item> = new MatTableDataSource();

  salesSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.salesSubscription = this.http.get<Item[]>('assets/data/dashboards/sale-products.json')
      .subscribe(sales => this.salesDataSource.data = sales);
  }

  ngOnDestroy(): void {
    this.salesSubscription.unsubscribe();
  }

  reorderData(): void {
    this.salesDataSource.data = this.salesDataSource.data.reverse();
  }
}

export interface Item {
  photo: string;
  product: string;
  salesIncrease: string;
  sales: number;
  discount: string;
  stock: number;
}
