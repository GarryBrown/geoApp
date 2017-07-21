import { Injectable } from '@angular/core';

import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import "rxjs/add/operator/mergeMap";
import { } from '@types/googlemaps';

import { UtilsService } from '../../../shared';


@Injectable()
export class ChartService {
  private mockCoords: Array<google.maps.LatLng>;
  private coords: Array<any>;
  private addresses: Array<string>;


  constructor(
    private utilsService: UtilsService
  ) {
    this.addresses = [
      'Krasnodar',
      'Moscow',
      'Rome',
      // 'Canada',
      // 'Paris',
    ];
    this.coords = [
      { lat: 45.03926740000001, lng: 38.98722099999998 },
      { lat: 41.03926740000001, lng: 12.98722099999998 },
      { lat: 55.03926740000001, lng: 37.98722099999998 },
      // { lat: 40.03926740000001, lng: -74.98722099999998 },
      // { lat: 46.03926740000001, lng: -106.98722099999998 }
    ];

    this.utilsService.load().then(
      () => this.mockCoords = this.setMockCoords(this.coords)
    )

  }

  setMockCoords(coords) {
    return coords.map(coord => new google.maps.LatLng(coord.lat, coord.lng));
  }

  // if we try more than 6 obj/request error occured
  // 'couse googleApi response queryLimit request, it's requared.

  // and this func may be better by rxjs but i need more experience with it
  toCoords(addresses): Observable<Array<any>> {
    return new Observable((observer: Observer<any[]>) => {
      let times = [];
      addresses.map(address => {
        let time = performance.now();
        this.utilsService.codeAddress(address).subscribe(
          (data) => {
            time = performance.now() - time;
            times.push(time);
            if (times.length === addresses.length) {
              observer.next(times);
              observer.complete();
            }
          },
          (err) => console.error(err),
        )
      })
    });
  };


  toAddress(coords): Observable<Array<any>> {
    return new Observable((observer: Observer<any[]>) => {
      let times = [];
      coords.map(coord => {
        let time = performance.now();
        this.utilsService.geocode(coord).subscribe(
          (data) => {
            time = performance.now() - time;
            times.push(time);
            if (times.length === coords.length) {
              observer.next(times);
              observer.complete();
            }
          },
          (err) => console.error(err),
        )
      })
    });
  };

  getAddress(): Array<string> {
    return this.addresses;
  }

  getCoords(): Array<google.maps.LatLng> {
    return this.mockCoords;
  }



}
