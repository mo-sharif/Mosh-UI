import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-toggle',
  templateUrl: './toggle-example.component.html',
  styleUrls: ['./toggle-example.component.scss']
})
export class ToggleExampleComponent implements OnInit {
  disabled: boolean;
  checked: boolean;

  constructor() {}

  ngOnInit(): void {
  }

}
