import { LayoutService } from './../../../layouts/layout.service';
import { Component } from '@angular/core';

@Component({
  selector: 'layout-service-example',
  templateUrl: './layout-service-example.component.html',
  styleUrls: ['./layout-service-example.component.scss']
})
export class LayoutServiceExampleComponent {
  layoutTitle: string;
  loaderTime: number = 10;

  constructor(public layoutService: LayoutService) { }

  showLoader(loaderTime: number): void {
    this.layoutService.setLoader(true);
    setTimeout(
      () => this.layoutService.setLoader(false),
      loaderTime * 1000
    );
  }
}
