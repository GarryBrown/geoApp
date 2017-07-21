import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
})
export class RootModule { }
