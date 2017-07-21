import { Component, OnInit } from '@angular/core';

import { AlertComponent } from '../../../../shared';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  markers: Array<any>;

  constructor(
    private alert: AlertComponent
  ) {
    this.markers = [];
  }

  ngOnInit() {
    this.alert.open('Click to add a marker');
  }

  addMarker(event) {
    const marker = {
      id: Date.now(),
      coords: {
        lat: event.coords.lat,
        lng: event.coords.lng
      }
    };
    this.markers.push(marker);
  }

}
