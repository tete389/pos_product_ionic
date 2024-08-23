import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {
  IonCard, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonButton, IonIcon, IonSelect, IonSelectOption, IonImg, IonProgressBar, IonInfiniteScroll
  , IonInfiniteScrollContent, IonList, IonItem, ModalController
} from '@ionic/angular/standalone';
import { DatePickComponent } from './date-pick/date-pick.component';
import * as moment from 'moment';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [NgFor, IonCard, IonCol, IonRow, IonContent, IonGrid, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton
    , IonIcon, IonSelect, IonSelectOption, IonImg, IonProgressBar, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonItem]
})
export class HistoryPage implements OnInit {
  date_pick: any
  data_history: any
  selectedSection: number = 1;
    generateRandomData = (baseDate: string) => {
    const randomValue = (base: number, variation: number) => {
      return (base + (Math.random() - 0.5) * variation).toFixed(2);
    };
  
    const randomInt = (base: number, variation: number) => {
      return Math.floor(base + (Math.random() - 0.5) * variation);
    };
  
    return Array.from({ length: 50 }, (_, i) => ({
      date: moment(baseDate).add(i, 'days').format('DD/MM/YYYY'),
      totalSales: randomValue(100000, 10000),
      cash: randomValue(20000, 5000),
      transfer: randomValue(80000, 10000),
      discount: randomValue(7000, 1000),
      serviceCharge: randomValue(10000, 2000),
      vat: randomValue(7000, 1000),
      bill: randomInt(100, 20),
      averageBill: randomValue(1000, 200),
      bestSeller: `Foodname ${i + 1}`,
      bestSellerCategory: `Category name ${i + 1}`,
      customerCount: randomInt(120, 30),
      memberCount: randomInt(40, 10),
      newMembers: randomInt(20, 5),
    }));
  };
  data_bill = (baseDate: string) => {
    const randomValue = (base: number, variation: number) => {
      return (base + (Math.random() - 0.5) * variation).toFixed(2);
    };
  
    const randomInt = (base: number, variation: number) => {
      return Math.floor(base + (Math.random() - 0.5) * variation);
    };
  
    return Array.from({ length: 50 }, (_, i) => ({
      Order_id: 'ID:0001226',
      bill_tax: 'SALE-000001',
      date: moment(baseDate).add(i, 'days').format('DD/MM/YYYY'),
      table:'A6',
      table_type: 'ทานที่ร้าน',
      number_people: '4',
      course_type: 'Gold Course',
      member_name: 'zack',
      payment_type: 'สด',
      income: '1,300.00',
      change: '26.00',
      total:'1,275',
     
    }));
  };
  data_day_bill = this.data_bill('01/01/2024');
  data_day = this.generateRandomData('01/01/2024');
  data_month = this.generateRandomData('01/02/2024');
  data_year = this.generateRandomData('01/03/2024');


  constructor(
    public modalController: ModalController
  ) {

  }

 

  ngOnInit() {
    this.selectSection(1);
  }

  selectSection(section: number) {
    this.selectedSection = section;
    switch (this.selectedSection) {
      case 1:
        this.data_history = this.data_day_bill
        break;
      case 2:
        this.data_history = this.data_month
        break;
      case 3:
        this.data_history = this.data_year
        break;
      default:
        break;
    }
  }
  selectSection_date() {
   
    switch (this.selectedSection) {
      case 1:
        this.openModalSelectDate()
        break;
      case 2:
        this.openModalSelectDate()
        break;
      default:
        break;
    }
  }

 

  async openModalSelectDate() {
    const modal = await this.modalController.create({
      cssClass: 'my-custom-modal-datetime',
      component: DatePickComponent,
    });
    await modal.present();
    const event: any = await modal.onDidDismiss();
    const date = event.data;
    console.log(event);
    console.log(date);

    if (event.role == 'save') {
      this.date_pick = date;
      console.log('Selected Date:', this.date_pick);
    }
  }

}
