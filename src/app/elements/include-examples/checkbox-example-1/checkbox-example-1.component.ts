import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'example-checkbox-1',
  templateUrl: './checkbox-example-1.component.html',
  styleUrls: ['./checkbox-example-1.component.scss']
})
export class CheckboxExample1Component {
  alarmForm: FormGroup;

  days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.alarmForm = new FormGroup({});

    this.days.forEach(day => this.alarmForm.addControl(day,
      new FormControl(false)
    ));
  }

  setAlarm(): void {
    const days: string[] = [];
    for (const day in this.alarmForm.value) {
      if (this.alarmForm.value.hasOwnProperty(day)) {
        if (true === this.alarmForm.value[day]) {
          days.push(day);
        }
      }
    }

    this.snackBar.open('Alarm set for ' + days.join(', '));
  }
}
