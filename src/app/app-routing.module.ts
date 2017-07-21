import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
  {
    path: 'map',
    loadChildren: './modules/map/map.module#MapModule',
  },
  {
    path: 'geocoder',
    loadChildren: './modules/geocoder/geocoder.module#GeocoderModule',
  },
  {
    path: 'chart',
    loadChildren: './modules/chart/chart.module#ChartModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
