import { Component } from '@angular/core';

@Component({
  selector: 'progress-spinner-example-1',
  templateUrl: './progress-spinner-example-1.component.html',
  styleUrls: ['./progress-spinner-example-1.component.scss']
})
export class ProgressSpinnerExample1Component {
  color: String = 'primary';
  mode: String = 'indeterminate';
  value: Number = 50;

  constructor() { }
}
