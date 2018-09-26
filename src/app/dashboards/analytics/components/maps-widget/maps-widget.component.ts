import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-maps-widget',
  templateUrl: './maps-widget.component.html',
  styleUrls: ['./maps-widget.component.scss']
})
export class MapsWidgetComponent implements OnInit {
  lat: number;
  lng: number;

  constructor() {
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

  ngOnInit(): void {
  }

}
