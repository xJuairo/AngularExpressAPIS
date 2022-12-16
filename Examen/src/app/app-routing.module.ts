import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenWeatherMapComponent } from './open-weather-map/open-weather-map.component';
import { CondicionesAtmosfericasComponent } from './condiciones-atmosfericas/condiciones-atmosfericas.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { TiktokComponent } from './tiktok/tiktok.component';

const routes: Routes = [
  { path: 'openweathermap', component: OpenWeatherMapComponent },
  { path: 'condiciones-atmosfericas', component: CondicionesAtmosfericasComponent },
  { path: 'youtube', component: YoutubeComponent},
  { path: 'tiktok', component: TiktokComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'openweathermap'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
