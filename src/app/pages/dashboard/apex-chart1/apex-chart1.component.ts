import { Component } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexMarkers,
  ApexLegend
} from "ng-apexcharts";

@Component({
  selector: 'app-apex-chart1',
  templateUrl: './apex-chart1.component.html',
  styleUrls: ['./apex-chart1.component.css']
})
export class ApexChart1Component {


  data = [2, 25, 65, 20];

  series: ApexAxisChartSeries = [{
    data: this.data.slice()
  }]

  chart: ApexChart = {
    id: 'realtime',
    height: 350,
    type: 'line',
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  }

  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    curve: 'smooth'
  }
  title: ApexTitleSubtitle = {
    text: 'Dynamic Updating Chart',
    align: 'left'
  }
  markers:ApexMarkers= {
    size: 0
  }
  xaxis:ApexXAxis = {
    type: 'datetime',
   // range: 'XAXISRANGE',
  }
  yaxis:ApexYAxis = {
    max: 100
  }
  legend: ApexLegend ={
    show: false
  }
  

  // options = {
  //   series: [{
  //     data: this.data.slice()
  //   }],

  //   dataLabels: {
  //     enabled: false
  //   },
  //   stroke: {
  //     curve: 'smooth'
  //   },
  //   title: {
  //     text: 'Dynamic Updating Chart',
  //     align: 'left'
  //   },
  //   markers: {
  //     size: 0
  //   },
  //   xaxis: {
  //     type: 'datetime',
  //     range: 'XAXISRANGE',
  //   },
  //   yaxis: {
  //     max: 100
  //   },
  //   legend: {
  //     show: false
  //   },
  // };

  // chart1 = new ApexCharts(document.querySelector("#chart"), this.options);

  // ngOnInit(): void {
  //   this.chart1.render();

  //   window.setInterval(() => {
  //     // getNewSeries(lastDate, {
  //     //   min: 10,
  //     //   max: 90
  //     // });
  //     this.chart1.updateSeries([{
  //       data: this.data
  //     }])
  //   }, 4000);
  // }
}
// function getNewSeries(lastDate: any, arg1: { min: number; max: number; }) {
//   throw new Error('Function not implemented.');
// }



