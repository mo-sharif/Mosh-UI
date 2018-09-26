import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-field-example-1',
  templateUrl: './form-field-example-1.component.html',
  styleUrls: ['./form-field-example-1.component.scss']
})
export class FormFieldExample1Component {
  formColor: String = 'primary';
  formFontSize: Number = 14;
  formPlaceholders: String = 'auto';
  formRequired: Boolean = true;
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      describe: ''
    });
  }
}
