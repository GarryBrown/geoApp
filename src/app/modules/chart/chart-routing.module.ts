import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ChartComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class ChartRoutingModule { }
