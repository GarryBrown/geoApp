import { NgModule } from '@angular/core';
import { MapRoutingModule } from './map-routing.module';
import { SharedModule, AlertComponent } from '../../shared';
/* components */
import { MapComponent } from './components';

@NgModule({
  imports: [
    MapRoutingModule,
    SharedModule,
  ],
  declarations: [
    MapComponent
  ],
  providers: [
    AlertComponent
  ]
})
export class MapModule { }
