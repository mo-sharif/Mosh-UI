import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grid-list-example-2',
  templateUrl: './grid-list-example-2.component.html',
  styleUrls: ['./grid-list-example-2.component.scss']
})
export class GridListExample2Component implements OnInit {
  tiles: any[];
  ratioGutter: number;

  constructor() {
    this.tiles = [
      { text: 'cols = 3, rows = 1', cols: 3, rows: 1, img: 'http://via.placeholder.com/900x300' },
      { text: 'cols = 1, rows = 2', cols: 1, rows: 2, img: 'http://via.placeholder.com/300x600' },
      { text: 'cols = 1, rows = 1', cols: 1, rows: 1, img: 'http://via.placeholder.com/300x300' },
      { text: 'cols = 2, rows = 1', cols: 2, rows: 1, img: 'http://via.placeholder.com/600x300' }
    ];
    this.ratioGutter = 1;
  }

  ngOnInit(): void {
  }

}
