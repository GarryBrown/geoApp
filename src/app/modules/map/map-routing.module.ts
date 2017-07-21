import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class MapRoutingModule { }
