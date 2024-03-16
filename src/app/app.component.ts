import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
input1Value!: number;
input2Value!: number;
validationmessage!: string;
data : any;
options :any;

updateValues(){
  if (this.input1Value + this.input2Value > 100) {
          this.validationmessage = 'Incorrect Value';
        } else {
          this.validationmessage = '';
          if (this.input1Value) {
            this.input2Value = 100 - this.input1Value;
          } else if (this.input2Value) {
            this.input1Value = 100 - this.input2Value;
          }
        }
}
createChart(){
  this.data = {
    labels :['Box1','Box2'],
    datasets:[{
      data :[this.input1Value,this.input2Value],
      backgroundColor : ['orange','grey'],
      hoverBackgroundColor:['orange','grey']
    }]
  }
}

  }
 
  

 


