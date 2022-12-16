import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  columnChartOptions: any;
  pieChartOptions: any;
  lineChartOptions: any;
  variable: any;
  videos: any;
  constructor(private httpClient:HttpClient) { }

  call(){
    console.log("Hola")
    this.httpClient.get('/getTrendingYoutube').
    subscribe( data =>{
      type ObjectKey = keyof typeof data;
      const myVar = 'resultado' as ObjectKey;
      this.variable = data[myVar];
      console.log(this.variable);
      type ObjectKey1 = keyof typeof this.variable;
      const myVar1 = 'items' as ObjectKey1;
      this.videos = this.variable[myVar1];
      console.log(this.videos);
      let result = [];
      let deira = [];
      let datos = [];
      for(let item of this.videos){
        var registro = {'label' : item.snippet.title, 'y' : Number(item.statistics.viewCount) }
        var likes = {'label' : item.snippet.title, 'y' : Number(item.statistics.likeCount) }
        var coms = {'label' : item.snippet.title, 'y' : Number(item.statistics.commentCount) }
        deira.push(registro);
        result.push(likes);
        datos.push(coms);
      }
      console.log(deira)
      this.columnChartOptions = {
        animationEnabled: true,
        title: {
          text: 'Vistas en Videos en tendencias',
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
      text: 'Likes en videos en tendencias',
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
        text: 'Comentarios en Videos en tendencias',
        },
        theme: 'light2', // "light1", "dark1", "dark2"
        data: [
        {
            type: 'line',
            dataPoints: datos,
        },
        ],
    };
    });
  }
  ngOnInit(): void {
    this.call();
  }

}
