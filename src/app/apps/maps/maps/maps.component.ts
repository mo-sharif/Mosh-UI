import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
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
      .subscribe(markers => this.markers = markers);
  }

  ngOnInit(): void {
  }

  onMapReady(map: any): void {
    this.map = map;
  }

  onPersonClick(marker: any): void {
    this.map.panTo(marker);
    this.activeMarker = marker;
    this.markers.forEach(m => m.isOpen = m === marker);
  }
}

interface Marker {
  lat: number;
  lng: number;
  profession: string;
  bio: string;
  age: number;
  name: string;
  surname: string;
  phone: string;
  photo: string;
  isOpen: boolean;
}
