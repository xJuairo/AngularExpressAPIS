import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-condiciones-atmosfericas',
  templateUrl: './condiciones-atmosfericas.component.html',
  styleUrls: ['./condiciones-atmosfericas.component.css']
})
export class CondicionesAtmosfericasComponent implements OnInit {
  selectedLevel= "Aguascalientes";
  displayedColumns = ['name', 'state', 'relativehumidity', 'longitude', 'latitude', 'tempc'];
  constructor(private httpClient:HttpClient) { }
  variable: any;
  variable1: any;
  texto: string="";
  municipios: string = "";
  verdad: string = "true";

  alerta(){
    Swal.fire(this.municipios);
  }

  call(){
    this.texto = "Espere un momento";
    this.municipios = "";
    console.log(this.selectedLevel)
    this.httpClient.get('/getAtmosfericas?state='+this.selectedLevel).
    subscribe( data =>{
      type ObjectKey = keyof typeof data;
      const myVar = 'resultado' as ObjectKey;
      this.variable = data[myVar];
      type ObjectKey1 = keyof typeof this.variable;
      const myVar1 = 'results' as ObjectKey1;
      this.variable1 = this.variable[myVar1];
      var array = this.variable1;
      var xd = array.map((x: any) => JSON.stringify(x))
      let result = [];
      for(let item of this.variable1){
        result.push(item.name);
      }
      let unique = [new Set(result)];
      for(let item of unique.values()){
        console.log(item)
        console.log(item.size)
        item.forEach((value) =>{
          console.log(value);
          this.municipios += value;
          this.municipios += '\n'
        });
      }
      console.log(this.municipios);
      
      this.texto = "";
      this.verdad = "false";
    });
  }

  ngOnInit(): void {
    this.call();
  }

}
