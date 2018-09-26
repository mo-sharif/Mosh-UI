import { LayoutService } from './../../layout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portal-layout-loader',
  templateUrl: './layout-loader.component.html',
  styleUrls: ['./layout-loader.component.scss']
})
export class LayoutLoaderComponent implements OnInit {

  constructor(public layoutService: LayoutService) {

  }

  ngOnInit(): void {
  }

}
