import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpenWeatherMapComponent } from './open-weather-map/open-weather-map.component';
import { CondicionesAtmosfericasComponent } from './condiciones-atmosfericas/condiciones-atmosfericas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialModule } from './material/material.module';
import { YoutubeComponent } from './youtube/youtube.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OpenWeatherMapComponent,
    CondicionesAtmosfericasComponent,
    YoutubeComponent,
    TiktokComponent,
    CanvasJSChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
