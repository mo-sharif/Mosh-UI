import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-example-1',
  templateUrl: './select-example-1.component.html',
  styleUrls: ['./select-example-1.component.scss']
})
export class SelectExample1Component implements OnInit {
  favColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
