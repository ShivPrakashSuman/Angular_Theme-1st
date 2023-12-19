import { Component, Input } from '@angular/core';
import { data } from 'jquery';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexLegend, ApexPlotOptions, ApexResponsive, ApexXAxis } from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  // @Input() chart_item: any;
  // getData: any = '';
  // array_data:any =  [];
  // colors: string[] = [];
  // ngOnInit(): void {
  //   this.getData = this.chart_item[0];
  //   for (var item of  this.getData.data) {
  //     this.array_data.push(item);
  //   }
  //   for (var item of  this.getData.colors) {
  //     this.colors.push(item);
  //   }
  //   //console.log('click', this.colors)
  // }

  // series: ApexAxisChartSeries = [
  //   {
  //     name: this.getData.name,
  //     data: this.array_data
  //   }
  // ]
  // chart: ApexChart = {
  //   height: '350',
  //   type: "bar",
  //   events: {
  //     click: function (chart, w, e) {
  //       // console.log(chart, w, e)
  //     }
  //   }
  // }

  // plotOptions: ApexPlotOptions = {
  //   bar: {
  //     columnWidth: "45%",
  //     distributed: true,
  //   }
  // }
  // dataLabels: ApexDataLabels = {
  //   enabled: false
  // }
  // legend: ApexLegend = {
  //   show: false
  // }
  // grid: ApexGrid = {
  //   show: false
  // }
  // xaxis: ApexXAxis = {
  //   categories: [
  //     ["John", "Doe"],
  //     ["Joe", "Smith"],
  //     ["Jake", "Williams"],
  //     "Amber",
  //     ["Peter", "Brown"],
  //     ["Mary", "Evans"],
  //     ["David", "Wilson"],
  //     ["Lily", "Roberts"]
  //   ],
  //   labels: {
  //     style: {
  //       colors: this.colors ,
  //       fontSize: "12px"
  //     }
  //   }
  // }
  @Input() chart_item: any = '';
  options: any = '';
  all_data: any = '';

  ngOnInit() {
    this.all_data = this.chart_item[0];
    const chartOptions: Partial<ChartOptions> = {

      series: this.all_data.series,
      chart: this.all_data.chart,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: this.all_data.xaxis,
    };
    this.options = chartOptions;
  }

}
