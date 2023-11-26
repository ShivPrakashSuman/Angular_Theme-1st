import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ApexChart, ApexNonAxisChartSeries } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  toggleVal: boolean = false;
  sideBarOpne = true;

  sideBarToggler() {
    this.sideBarOpne = !this.sideBarOpne;
  }

  // Apex Chart ---
  chartSeries: ApexNonAxisChartSeries = [40, 32, 25, 55]
  chartDetails: ApexChart = {
    type: 'pie',
    width:500,
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

