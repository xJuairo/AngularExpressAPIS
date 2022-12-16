import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiktok',
  templateUrl: './tiktok.component.html',
  styleUrls: ['./tiktok.component.css']
})
export class TiktokComponent implements OnInit {
  columnChartOptions: any;
  pieChartOptions: any;
  lineChartOptions: any;
  variable: any;
  variable1: any;
  tiktoks: any;
  constructor(private httpClient:HttpClient) { }

  call(){
    this.httpClient.get('/getTrendingTikTok').
    subscribe( data =>{
      type ObjectKey = keyof typeof data;
      const myVar = 'resultado' as ObjectKey;
      this.variable = data[myVar];
      console.log(this.variable);
      type ObjectKey1 = keyof typeof this.variable;
      const myVar1 = 'data' as ObjectKey1;
      this.variable1 = this.variable[myVar1];
      type ObjectKey2 = keyof typeof this.variable1;
      const myVar2 = 'list' as ObjectKey2;
      this.tiktoks = this.variable1[myVar2];
      let result = [];
      let deira = [];
      let datos = [];
      for(let item of this.tiktoks){
        var registro = {'label' : item.desc, 'y' : Number(item.statistics.play_count) }
        var likes = {'label' : item.desc, 'y' : Number(item.statistics.digg_count) }
        var coms = {'label' : item.desc, 'y' : Number(item.statistics.comment_count) }
        deira.push(registro);
        result.push(likes);
        datos.push(coms);
      }
      console.log(deira)
      this.columnChartOptions = {
        animationEnabled: true,
        title: {
          text: 'Vistas en Tiktoks en tendencias',
        },
        data:[
          {
            type: 'column',
            dataPoints: deira,
          }
        ]
    }
    this.pieChartOptions = {
      animationEnabled: true,
      title: {
      text: 'Diggs en Tiktoks en tendencias',
      },
      theme: 'light2', // "light1", "dark1", "dark2"
      data: [
      {
          type: 'pie',
          dataPoints: result,
      },
      ],
  };

    this.lineChartOptions = {
        animationEnabled: true,
        title: {
        text: 'Comentarios en Tiktoks en tendencias',
        },
        theme: 'light2', // "light1", "dark1", "dark2"
        data: [
        {
            type: 'line',
            dataPoints: datos,
        },
        ],
    };
      /*type ObjectKey1 = keyof typeof this.variable;
      const myVar1 = 'items' as ObjectKey1;
      this.videos = this.variable[myVar1];
      console.log(this.videos);*/
    });
  }
  ngOnInit(): void {
    this.call();
  }

}
