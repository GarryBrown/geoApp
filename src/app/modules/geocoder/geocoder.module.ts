import { NgModule } from '@angular/core';
import { GeocoderRoutingModule } from './geocoder-routing.module';
import { SharedModule, AlertComponent } from '../../shared';
import { ReactiveFormsModule } from '@angular/forms';
/* vendors */
import { GoogleMapsAPIWrapper } from '@agm/core';
/* components */
import { GeocoderComponent } from './components';
/* services */
import { GeocoderService } from './services';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    GeocoderRoutingModule,
  ],
  declarations: [
    GeocoderComponent
  ],
  providers: [
    GoogleMapsAPIWrapper,
    GeocoderService,
    AlertComponent,
  ]
})
export class GeocoderModule { }


