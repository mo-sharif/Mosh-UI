import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'stepper-example-1',
  templateUrl: './stepper-example-1.component.html',
  styleUrls: ['./stepper-example-1.component.scss']
})
export class StepperExample1Component {
  nameForm: FormGroup;
  questForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nameForm = this.fb.group({
      firstName: ['', Validators.required]
    });

    this.questForm = this.fb.group({
      quest: ['', Validators.required]
    });
  }
}
