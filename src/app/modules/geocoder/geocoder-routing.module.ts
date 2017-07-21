import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeocoderComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: GeocoderComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class GeocoderRoutingModule { }
