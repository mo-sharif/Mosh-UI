import { Component, OnInit } from '@angular/core';

import { LayoutService } from './../layout.service';

@Component({
  selector: 'portal-layout-boxed',
  templateUrl: './layout-boxed.component.html',
  styleUrls: ['./layout-boxed.component.scss']
})
export class LayoutBoxedComponent implements OnInit {

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

}
