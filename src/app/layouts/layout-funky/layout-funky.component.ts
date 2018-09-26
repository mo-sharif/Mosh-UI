import { MatSidenav } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from './../layout.service';

@Component({
  selector: 'portal-layout-funky',
  templateUrl: './layout-funky.component.html',
  styleUrls: ['./layout-funky.component.scss']
})
export class LayoutFunkyComponent implements OnInit {
  currentMenu: string;

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

  openMenu(menu: string, drawer: MatSidenav): void {
    this.currentMenu = menu;
    drawer.open();
  }
}
