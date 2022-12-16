import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-weather-map',
  templateUrl: './open-weather-map.component.html',
  styleUrls: ['./open-weather-map.component.css']
})
export class OpenWeatherMapComponent implements OnInit {
  
  latitud = "21.8859";
  longitud = "-102.3613";
  description = "";
  temp = "";
  humidity = "";
  country = "";
  name = "";
  resultado : any;
  weather : any;
  main : any;
  sys : any;
  array : any;
  ELEMENT_DATA: any;
  dataSource : any;
  displayedColumns: string[] = ['lon', 'lat', 'description', 'temp', 'humidity', 'country', 'name'];

  constructor(private httpClient:HttpClient) { }

  call(){
    this.httpClient.get('/getWeather?lat='+this.latitud+'&lon='+this.longitud).
    subscribe( data =>{

      type ObjectKey = keyof typeof data;
      const myVar = 'resultado' as ObjectKey;
      this.resultado = data[myVar];
      
      type ObjectKeyR = keyof typeof this.resultado;
      const myvar1 = 'name' as ObjectKeyR;
      this.name = this.resultado[myvar1];

      const myvar2 = 'weather' as ObjectKeyR;
      this.weather = this.resultado[myvar2];
      this.description = this.weather[0].description;

      const myvar3 = 'main' as ObjectKeyR;
      this.main = this.resultado[myvar3];

      type ObjectKeyM = keyof typeof this.main;
      const myv5 = 'temp' as ObjectKeyM;
      this.temp = this.main[myv5];
      var doble = parseFloat(this.temp);
      doble -= 273.5;
      this.temp = doble.toString();

      const myv6 = 'humidity' as ObjectKeyM;
      this.humidity = this.main[myv6];
      console.log(this.humidity);

      const myvar4 = 'sys' as ObjectKeyR;
      this.sys = this.resultado[myvar4];

      type ObjectKeyS = keyof typeof this.sys;
      const myv7 = 'country' as ObjectKeyS;
      this.country = this.sys[myv7];

      this.ELEMENT_DATA = [
        { lon: this.longitud, lat: this.latitud, description: this.description, temp: this.temp, humidity: this.humidity, country: this.country, name: this.name}
      ];
      this.dataSource = this.ELEMENT_DATA;
    });
  }

  ngOnInit(): void {
    /*console.log(this.obj)
    type ObjectKey = keyof typeof this.obj;
    const myVar = 'hdurl' as ObjectKey;
    console.log(this.obj[myVar]);
    this.variable = this.obj[myVar].toString();*/
  }

}
