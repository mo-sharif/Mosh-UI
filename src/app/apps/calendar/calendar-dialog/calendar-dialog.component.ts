import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as moment from 'moment';

@Component({
  selector: 'portal-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  styleUrls: ['./calendar-dialog.component.scss']
})
export class CalendarDialogComponent {
  type: string;
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<CalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.type = null !== data ? 'Edit' : 'Add';
    this.eventForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required)
    });

    if (null !== data) {
      this.eventForm.setValue({
        title: data.title || '',
        location: data.location || '',
        description: data.description || '',
        start: data.start.toDate() || new Date(),
        end: data.end.toDate() || new Date(),
      });
    }
  }

  submit(): void {
    this.dialog.close(this.eventForm.value);
  }
}
