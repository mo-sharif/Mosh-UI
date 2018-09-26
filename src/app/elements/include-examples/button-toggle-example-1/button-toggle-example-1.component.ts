import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'button-toggle-example-1',
  templateUrl: './button-toggle-example-1.component.html',
  styleUrls: ['./button-toggle-example-1.component.scss']
})
export class ButtonToggleExample1Component {
  alignText: string;
  stars: number;

  constructor() {
    this.stars = 2123;
    this.alignText = 'left';
  }

  starChange(event: MatButtonToggleChange): void {
    if (event.source.checked) {
      this.stars += 1;
    } else {
      this.stars -= 1;
    }
  }
}
