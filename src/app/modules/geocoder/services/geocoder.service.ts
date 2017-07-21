import { Injectable } from '@angular/core';

import { } from '@types/googlemaps';

@Injectable()
export class GeocoderService {

  constructor() {
  }

  coordsToString(coords: any): string {
    return `lat: ${coords.lat()}  lng: ${coords.lng()}`
  }

  strToCoord(coordsStr: string): any {
    if (coordsStr.indexOf(',') !== -1) {
      let coords: Array<string> = coordsStr.split(',');
      coords = coords.map(coord => coord.trim());
      return new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1]));

    } else {
      return null
    }
  }
}
