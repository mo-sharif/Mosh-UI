import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-radio-1',
  templateUrl: './radio-example-1.component.html',
  styleUrls: ['./radio-example-1.component.scss']
})
export class RadioExample1Component implements OnInit {
  favFood: string;

  constructor() { }

  ngOnInit(): void {
  }

}
