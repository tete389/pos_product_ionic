import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { IonCard,IonCol,IonRow,IonContent, IonHeader, IonTitle, IonToolbar , IonGrid,IonButton,IonIcon,IonSelect,IonSelectOption,IonImg ,IonProgressBar,IonInfiniteScroll
  ,IonInfiniteScrollContent,IonList,IonItem
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [NgFor,IonCard,IonCol,IonRow,IonContent,IonGrid, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton
    ,IonIcon,IonSelect,IonSelectOption,IonImg,IonProgressBar, IonInfiniteScroll,IonInfiniteScrollContent,IonList,IonItem]
})
export class HistoryPage implements OnInit {
  data = Array(50).fill({
    date: '31/01/2024',
    totalSales: '100,000.00',
    cash: '20,000.00',
    transfer: '80,000.00',
    discount: '7,000',
    serviceCharge: '10,000',
    vat: '7,000',
    bill: '100',
    averageBill: '1000.00',
    bestSeller: 'Foodname',
    bestSellerCategory: 'Category name',
    customerCount: '120',
    memberCount: '40',
    newMembers: '20'
  });

  constructor() { }

  ngOnInit() {
  }

}
