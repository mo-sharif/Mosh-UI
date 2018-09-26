import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'portal-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.scss']
})
export class LockComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      'password': ['', Validators.required]
    });
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  goLogin(): void {
    this.router.navigate(['/external/login']);
  }
}
