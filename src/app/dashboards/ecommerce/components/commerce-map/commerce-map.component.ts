import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'portal-dashboard-commerce-map',
  templateUrl: './commerce-map.component.html',
  styleUrls: ['./commerce-map.component.scss']
})
export class CommerceMapComponent implements OnInit {
  lat: number;
  lng: number;
  map: any;
  activeMarker: Marker;
  markers: Marker[];
  styles: any[] = [
    {
      'featureType': 'administrative.country',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'simplified'
        },
        {
          'hue': '#ff0000'
        }
      ]
    }
  ];
  constructor(private http: HttpClient) {
    this.lat = 51.678418;
    this.lng = 7.809007;
    this.http.get<Marker[]>('assets/data/apps/maps/maps.json')
      .subscribe(markers => {
        this.markers = markers;
      });
  }

  ngOnInit(): void {
  }

  onPersonClick(marker: any): void {
    this.map.panTo(marker);
    this.activeMarker = marker;
    this.markers.forEach(m => m.isOpen = m === marker);
  }

  onMapReady(map: any): void {
    this.map = map;
  }
}

interface Marker {
  lat: number;
  lng: number;
  name: string;
  surname: string;
  isOpen: boolean;
}
