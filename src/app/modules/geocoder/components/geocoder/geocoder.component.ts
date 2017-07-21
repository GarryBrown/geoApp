import { Component, ApplicationRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GeocoderService } from '../../services';
import { AlertComponent, UtilsService } from '../../../../shared';

interface result {
  address: string,
  latLng: string
}
@Component({
  selector: 'app-geocoder',
  templateUrl: './geocoder.component.html',
  styleUrls: ['./geocoder.component.scss']
})
export class GeocoderComponent implements OnInit {
  toAddressForm: FormGroup;
  toCodeForm: FormGroup;
  result: result;

  constructor(
    private fb: FormBuilder,
    private geocoderService: GeocoderService,
    private utilsService: UtilsService,
    private alertComponent: AlertComponent,
    private applicationRef: ApplicationRef
  ) {
    this.result = {
      address: '',
      latLng: ''
    }
  }

  ngOnInit() {
    this.utilsService.load().then(
      () => this.createForms()
    )
    
  }

  createForms() {
    this.toCodeForm = this.fb.group({
      address: ['Krasnodar', Validators.required],
    });
    this.toAddressForm = this.fb.group({
      coords: ['45.03926740000001, 38.98722099999998', Validators.required],
    });
  }

  encodeSubmit(form) {
    this.utilsService.codeAddress(form.get('address').value)
      .subscribe(
      data => this.onSuccessEncode(data),
      error => this.onError('encodeSubmit', error)
      )
  }

  decodeSubmit(form) {
    const latlng = this.geocoderService.strToCoord(form.get('coords').value);
    if (latlng) {
      this.utilsService.geocode(latlng)
        .subscribe(
        data => this.onSuccessDecode(data),
        error => this.onError('decodeSubmit', error)
        )
    } else {
      this.alertComponent.open("Enter coords by comma (34.001,39.002)");
    }

  }

  onSuccessEncode(data: any) {
    this.result.latLng = this.geocoderService.coordsToString(data[0].geometry.location);
    this.applicationRef.tick();
  }

  onSuccessDecode(data: any) {
    this.result.address = data[0].formatted_address;
    this.applicationRef.tick();
  }

  onError(src: string, error: any): void {
    this.alertComponent.open('Error occurred');
    console.error(`Error in ${src} couse ${error}`);
  }





}
