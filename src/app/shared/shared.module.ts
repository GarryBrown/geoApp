import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* vendors */
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
/* components */
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AgmCoreModule
  ],
  declarations: [AlertComponent,],
  exports: [
    AlertComponent,
    CommonModule,
    FormsModule,
    MaterialModule,
    AgmCoreModule
  ],
  providers: [
  ]
})
export class SharedModule { }
