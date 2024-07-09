import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonButton,
  IonProgressBar,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge,
  ModalController
  
} from '@ionic/angular/standalone';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexPlotOptions, ApexResponsive, ApexXAxis, NgApexchartsModule } from 'ng-apexcharts';
import { ModalSelectDateComponent } from './modal-select-date/modal-select-date.component';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: string[];
  colors: string[];
  legend: ApexLegend;
};
@Component({
  selector: 'app-best-sale-menu',
  templateUrl: './best-sale-menu.page.html',
  styleUrls: ['./best-sale-menu.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonButton,
    IonProgressBar,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    CommonModule,
    FormsModule,
    NgApexchartsModule
  ],
})



export class BestSaleMenuPage implements OnInit {

  customPopoverOptionsStyle1 = {
    cssClass: 'my-custom-customPopover-select-style-1',
  };

  select_period_number: number = 1;
  sort_month: any = '1';

  public PieOptions: Partial<ChartOptions> | any;
  
  constructor(
    public modalController: ModalController
  ) {} 

  ngOnInit() {
    this.PieOptions  = {
      series: [35, 30, 15, 10, 6, 5],
      chart: {
        type: 'pie',
      },
      labels: ['ชื่ออาหาร', 'ชื่ออาหาร', 'ชื่ออาหาร', 'ชื่ออาหาร', 'ชื่ออาหาร', 'ชื่ออาหาร'],
      colors: ['#1492E6', '#37C839', '#FE8100', '#F8B20D', '#FF5555', '#CDCFCE'],
      legend: {
        position: 'right',
        offsetY: 25,
        fontSize:'12px',
        markers: {
          offsetX: -5,
          width: 10,
          height: 10,
        },
      },
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: 200,
      //       },
      //       legend: {
      //         position: 'bottom',
      //       },
      //     },
      //   },
      // ],
    }
    
  }

  select_period(number_tab:number){
    this.select_period_number = number_tab;
    // switch (tabnumber) {
    //   case -1: {
    //     this.openModal();

    //   } break;
    //   case -2: {
    //     let date = moment().format('YYYY-MM-01')
    //     this.dateFrom = moment(date)
    //     this.dateTo = moment()
    //     this.textDate = 'ข้อมูลวันที่ ' + this.api.dateTothai(this.dateFrom, this.dateTo, 'range')
    //     this.loadSummary()
    //     console.log(this.dateFrom);

    //   } break;
    //   default: {
    //     this.dateFrom = moment().subtract(this.selected, 'd')
    //     this.dateTo = moment()
    //     this.textDate = 'ข้อมูลวันที่ ' + this.api.dateTothai(this.dateFrom, this.dateTo, 'range')
    //     this.loadSummary()
    //   } break;

    // }
  }

  items = [
    { image: 'assets/image/img-product.png', name: 'Food name', category: 'Food Category', order: 90, proportion: '20%', sales: 8750 },
    { image: 'assets/image/img-product.png', name: 'Food name', category: 'Food Category', order: 90, proportion: '10%', sales: 8750 },
    { image: 'assets/image/img-product.png', name: 'Food name', category: 'Food Category', order: 90, proportion: '8%', sales: 8750 },
    { image: 'assets/image/img-product.png', name: 'Food name', category: 'Food Category', order: 90, proportion: '7%', sales: 8750 },
  ];

  getColor(rank: number): string {
    switch (rank) {
      case 1: return 'warning';
      case 2: return 'tertiary';
      case 3: return 'danger';
      case 4: return 'success';
      default: return 'medium';
    }
  }

    //เปิด modal Calendar-day
    async openModalSelectDate() {
      const modal = await this.modalController.create({
        cssClass: 'my-custom-modal-datetime',
        component: ModalSelectDateComponent,
        // componentProps: {
        //   options:options
        //   bank: bank,
        //   data: data,
        //   order_id: this.order_id,
        //   price: Math.round(this.price),
        //   print_food_bill: this.print_food_bill
        // },
      });
      await modal.present();
      const event: any = await modal.onDidDismiss();
      const date = event.data;
      // const from: CalendarResult = date.from;
      // const to: CalendarResult = date.to;
  
      console.log(event);
      
      console.log(date);
      
      if (event.role == 'save') {
        console.log(event);
        
        // this.dateFrom = date.from
        // this.dateTo = date.to
        // this.textDate2 = this.api.dateTothai(this.dateFrom, this.dateTo, 'range')
        // this.loadPerson();
      }
      // console.log(date, from, to);
    }
}
