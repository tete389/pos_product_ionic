import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard,IonCol,IonRow,IonContent, IonHeader, IonTitle, IonToolbar , IonGrid,IonButton,IonIcon} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';

import { ApexDataLabels, ApexYAxis, NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  colors?: string[]; 
  dataLabels?: ApexDataLabels;
  yaxis?: ApexYAxis;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [NgFor,IonCard,IonCol,IonRow,IonContent,IonGrid, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NgApexchartsModule,IonButton,IonIcon]
})
export class DashboardPage implements OnInit {
  @ViewChild("chart") chart: any;
  public chartOptions: any;
  public chartOptions2: any;
  items = [1, 2, 3, 4,6,7,8,9,10,11,12];
  constructor() { 
    const generateRandomData = () => {
      return Array.from({ length: 7 }, () => Math.floor(Math.random() * (14000 - 2000 + 1)) + 2000);
    }
    const generateRandomData2 = () => {
      return Array.from({ length: 13 }, () => Math.floor(Math.random() * (14000 - 2000 + 1)) + 2000);
    }
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: generateRandomData() 
        }
      ],
      chart: {
        height: 200,
        type: "bar",
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      }
      },
      xaxis: {
        categories: ["จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส.", "อ."]
      },
      colors: ['#FE8100'],  
      dataLabels: {
        enabled: true,  
        formatter: function (val: number) {
          return (val / 1000).toFixed(1) + 'K'; 
        },
        style: {
          colors: ['#000000']  
        },
        offsetY: -24  
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top'  // ตำแหน่งของ data labels ให้อยู่ด้านบน
          }
        }
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return (val / 1000).toFixed(1) + 'K'; 
          }
        }
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "My-series",
          data: generateRandomData2() 
        }
      ],
      chart: {
        height: 200,
        type: "bar",
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      }
      },
      xaxis: {
        categories: ["11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"]
      },
      colors: ['#37C839'],  
      dataLabels: {
        enabled: true,  
        formatter: function (val: number) {
          return (val / 1000).toFixed(1) + 'K'; 
        },
        style: {
          colors: ['#000000']  
        },
        offsetY: -24  
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top'  // ตำแหน่งของ data labels ให้อยู่ด้านบน
          }
        }
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return (val / 1000).toFixed(1) + 'K'; 
          }
        }
      }
    };
  }
  
  ngOnInit() {
  }
  update() {
    this.chartOptions.series[0].data = this.generateRandomData();
    console.log(this.chartOptions.series[0].data);
    
  }

  generateRandomData() {
    return Array.from({ length: 9 }, () => Math.floor(Math.random() * (14000 - 2000 + 1)) + 2000);
  }
}
