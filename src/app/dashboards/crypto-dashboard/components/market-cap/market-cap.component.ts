import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'portal-dashboard-market-cap',
  templateUrl: './market-cap.component.html',
  styleUrls: ['./market-cap.component.scss'],
})
export class MarketCapComponent {
  displayedColumns: string[] = ['index', 'name', 'symbol', 'marketCap', 'price', 'supply', 'change'];
  currencyDataSource = new MatTableDataSource(ITEM_DATA);
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.currencyDataSource.sort = this.sort;
  }
}

export interface Item {
  index: number;
  name: string;
  symbol: string;
  marketCap: string;
  price: string;
  supply: string;
  change: string;
}

const ITEM_DATA: Item[] = [
  {index: 1, name: 'Bitcoin', symbol: 'BTC', marketCap: '$137,411,608,131', price: '$8,121.70', supply: '16,940,700', change: '-0.25%'},
  {index: 2, name: 'Ethereum', symbol: 'ETH', marketCap: '$47,733,845,131', price: '$484.95', supply: '98,428', change: '-0.43%'},
  {index: 3, name: 'Ripple', symbol: 'XRP', marketCap: '$23,453,455,131', price: '$0.4345395', supply: '39,940,700', change: '-0.12%'},
  {index: 4, name: 'Bitcoin Cash', symbol: 'BCH', marketCap: '$15,573,674,661', price: '$914.00', supply: '17,039,050', change: '-0.31%'},
  {index: 5, name: 'Litecoin', symbol: 'LTC', marketCap: '$8,222,510,375', price: '$147.37',supply: '55.749', change: '-0.43%'},
  {index: 6, name: 'EOS', symbol: 'EOS', marketCap: '$4,468,745,596', price: '$5.96', supply: '752,544,651', change: '-0.73%'},
  {index: 7, name: 'Cardano', symbol: 'ADA', marketCap: '$4,304,745,416', price: '$0.166033	', supply: '25,927,070,538', change: '-0.40%'}
];
