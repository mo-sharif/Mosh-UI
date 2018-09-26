import { Component } from '@angular/core';

@Component({
  selector: 'progress-bar-example-1',
  templateUrl: './progress-bar-example-1.component.html',
  styleUrls: ['./progress-bar-example-1.component.scss']
})
export class ProgressBarExample1Component {
  color: String = 'primary';
  mode: String = 'indeterminate';
  value: Number = 50;

  constructor() { }
}
