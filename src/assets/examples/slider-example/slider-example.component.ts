import { Component } from '@angular/core';

@Component({
  selector: 'example-slider',
  templateUrl: './slider-example.component.html',
  styleUrls: ['./slider-example.component.scss']
})
export class SliderExampleComponent {
  thumbLabel: boolean;
  value: number;

  constructor() {
    this.thumbLabel = false;
    this.value = 0;
  }
}
