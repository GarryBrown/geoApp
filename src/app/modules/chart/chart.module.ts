import { NgModule } from '@angular/core';
import { ChartRoutingModule } from './chart-routing.module';
import { SharedModule, AlertComponent } from '../../shared';
/* vendors */
import { GoogleMapsAPIWrapper } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
/* components */
import { ChartComponent } from './components';
/* services */
import { ChartService } from './services';


@NgModule({
  imports: [
    SharedModule,
    ChartRoutingModule,
    ChartsModule
  ],
  declarations: [ChartComponent],
  providers: [
    GoogleMapsAPIWrapper,
    AlertComponent,
    ChartService
  ]
})
export class ChartModule { }
