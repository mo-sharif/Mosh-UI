import { Component, OnInit } from '@angular/core';

import { LayoutService } from './../layout.service';

@Component({
  selector: 'portal-layout-toolbar',
  templateUrl: './layout-toolbar.component.html',
  styleUrls: ['./layout-toolbar.component.scss']
})
export class LayoutToolbarComponent implements OnInit {

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }
}
