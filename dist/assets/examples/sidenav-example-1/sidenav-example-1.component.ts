import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav-example-1',
  templateUrl: './sidenav-example-1.component.html',
  styleUrls: ['./sidenav-example-1.component.scss']
})
export class SidenavExample1Component implements OnInit {
  sidenavPosition: String = 'start';
  sidenavMode: String = 'over';
  sidenavDisabled: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
