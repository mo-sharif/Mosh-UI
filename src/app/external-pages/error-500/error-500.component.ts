import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'portal-error-500',
  templateUrl: './error-500.component.html',
  styleUrls: ['./error-500.component.scss']
})
export class Error500Component implements OnInit {
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      'search': ['', Validators.required]
    });
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}
