import { Component, OnInit } from '@angular/core';

import { LayoutService } from './../layout.service';

@Component({
  selector: 'portal-layout-tabbed',
  templateUrl: './layout-tabbed.component.html',
  styleUrls: ['./layout-tabbed.component.scss']
})
export class LayoutTabbedComponent implements OnInit {

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

}
