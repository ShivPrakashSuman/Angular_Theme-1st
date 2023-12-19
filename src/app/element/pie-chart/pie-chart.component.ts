import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  @Input() chart_item: any = '';
  options: any = '';
  all_data: any = '';
  
  ngOnInit() {
    this.all_data = this.chart_item[0];
    const chartOptions: Partial<ChartOptions> = {
      
      series: this.all_data.series,
      chart: this.all_data.chart,
      plotOptions: this.all_data.plotOptions,

      colors: this.all_data.colors,
      labels: this.all_data.labels,
      legend: this.all_data.legend,

      responsive: this.all_data.responsive
    };
    this.options = chartOptions;
  }

}
