import { Component } from '@angular/core';

@Component({
  selector: 'example-tooltip-1',
  templateUrl: './tooltip-example-1.component.html',
  styleUrls: ['./tooltip-example-1.component.scss']
})
export class TooltipExample1Component {
  position: String = 'before';

  constructor() { }

}
