import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootModule, GOOGLE_KEY, UtilsService } from './shared';
/* vandors */
import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core'
import 'hammerjs';
/* components */
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_KEY
    })
  ],
  providers: [
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
