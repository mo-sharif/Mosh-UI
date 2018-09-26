import { Component } from '@angular/core';
import { DateAdapter, NativeDateAdapter, MatSelectChange } from '@angular/material';


@Component({
  selector: 'example-datepicker-1',
  templateUrl: './datepicker-example-1.component.html',
  styleUrls: ['./datepicker-example-1.component.scss']
})
export class DatepickerExample1Component {
  selectedDate: Date;
  language: String = 'en-US';

  constructor(private dateAdapter: DateAdapter<NativeDateAdapter>) {}

  changeLocale($event: MatSelectChange): void {
    this.dateAdapter.setLocale($event.value);
  }
}
