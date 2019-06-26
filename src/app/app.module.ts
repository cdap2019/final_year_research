import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AddLandInfoComponent } from './add-land-info/add-land-info.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    AddLandInfoComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
