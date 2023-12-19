import { Component, OnInit } from '@angular/core';
import { auto } from '@popperjs/core';
import { Chart } from 'chart.js/auto';
import { ApexChart, ApexNonAxisChartSeries } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  bar_chart_options = [
    {
      series: {
        name: "my Custom",
        data: [25, 22, 10, 28, 16, 21, 13, 30]
      },
      chart: {
        height: '350',
        type: "bar",
        // events: {
        //   click: function (chart: any, w: any, e: any) {
        //     // console.log(chart, w, e)
        //   }
        // }
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"]
        ],
        labels: {
          style: {
            colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#546E7A", "#26a69a", "#D10CE8"],
            fontSize: "12px"
          }
        }
      }
    }
  ];

  chart_data = [
    {
      name: "distibuted",
      data: [21, 22, 10, 28, 16, 21, 13, 30],
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#546E7A", "#26a69a", "#D10CE8"],
    },
    {
      name: "my Custom",
      data: [25, 22, 10, 28, 16, 21, 13, 30],
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#546E7A", "#26a69a", "#D10CE8"],
    }
  ]
  chart_options = [
    {
      series: [76, 67, 61, 90],
      chart: {
        height: 390,
        type: "radialBar"
      },
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 50,
        offsetY: 10,
        labels: {
          useSeriesColors: true
        },
        formatter: function (seriesName: any, opts: any) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    }
  ]

  pie_chart_options = [{
    series: [40, 32, 25, 55],
    chart: {
      type: 'pie',
      width: 500,
      toolbar: {
        show: true
      }
    },
    colors: ["#1ab8ea", "#0002ff", "#39552E", "#0099B5"]
  }
  ]
  toggleVal: boolean = false;
  sideBarOpne = true;

  sideBarToggler() {
    this.sideBarOpne = !this.sideBarOpne;
  }

  // Apex Chart ---
  chartSeries: ApexNonAxisChartSeries = [40, 32, 25, 55]
  chartDetails: ApexChart = {
    type: 'pie',
    width: 500,
    toolbar: {
      show: true
    }
  }

  // Apex Chart end -- 

  ngOnInit() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
    const dataBar = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 70],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(255, 51, 204, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(255, 51, 204)'
        ],
        borderWidth: 1
      }]
    };

    new Chart('myChart', {
      type: 'bar',
      data: dataBar,
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      },
    });

    const cricleChart = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    new Chart('cricle', {
      type: 'doughnut',
      data: cricleChart,
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      },
    });
  }

  sidebarToggle(eventData: { toggleVal: boolean }) { // gettting value from child component
    this.toggleVal = eventData.toggleVal;
    console.log('profile page inside sidebar toggle', eventData.toggleVal);
  }
}

