import { Component } from '@angular/core';

@Component({
  selector: 'portal-dashboard-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
})
export class MostPopularComponent {
  displayedColumns: string[] = ['name', 'symbol', 'price', 'supply'];
  currencyDataSource = ITEM_DATA;
}

export interface Item {
  name: string;
  symbol: string;
  price: string;
  supply: number;
}
const ITEM_DATA: Item[] = [
  {name: 'Bitcoin', symbol: 'BTC', price: '$8,121.70',supply: 16.940},
  {name: 'Ethereum', symbol: 'ETH', price: '$484.95',supply: 98.428},
  {name: 'Ripple', symbol: 'XRP', price: '$411.95',supply: 39.094},
  {name: 'Bitcoin Cash', symbol: 'BCH', price: '$914.00', supply: 17.039},
  {name: 'Litecoin', symbol: 'LTC', price: '$147.37',supply: 55.749},
  {name: 'EOS', symbol: 'EOS', price: '$5.96',supply: 52.544},
  {name: 'Cardano', symbol: 'ADA', price: '$0.166',supply: 25.927}
];
