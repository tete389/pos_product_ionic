import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard,IonCol,IonRow,IonContent, IonHeader, IonTitle, IonToolbar , IonGrid,IonButton,IonIcon,IonSelect,IonSelectOption,IonImg ,IonProgressBar,IonInfiniteScroll
  ,IonInfiniteScrollContent,IonList,IonItem,IonButtons,IonMenuButton,IonInput
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-discounts-taxe',
  templateUrl: './discounts-taxe.page.html',
  styleUrls: ['./discounts-taxe.page.scss'],
  standalone: true,
  imports: [NgFor,IonCard,IonCol,IonRow,IonContent,IonGrid, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonButtons,IonMenuButton
    ,IonIcon,IonSelect,IonSelectOption,IonImg,IonProgressBar, IonInfiniteScroll,IonInfiniteScrollContent,IonList,IonItem,IonInput]

})
export class DiscountsTaxePage implements OnInit {
  isEditing = false;
  editingId: number | null = null;
  select_tab: any  = 1
  discounts = [
    {
      id: 1,
      name: 'ส่วนลดเทศกาลปีใหม่',
      remaining: 13,
      total: 40,
      amount: '15%',
      usage: 'เลือกใช้เอง',
      type: 'เปอร์เซนต์ (%)', 
    },
    {
      id: 2,
      name: 'ส่วนลดวันเกิด',
      remaining: 13,
      total: 40,
      amount: '40%',
      usage: 'เลือกใช้เอง',
      type: 'เปอร์เซนต์ (%)',  
    },
  ];
  vat = [
    {
      id: 1,
      name: 'ภาษีมูลค่าเพิ่ม 7%',
      remaining: 13,
      total: 40,
      amount: '7%',
      usage: 'ใช้งานอัตโนมัติ',
      type: 'เปอร์เซนต์ (%)', 
    },
   
  ];
  service = [
    {
      id: 1,
      name: 'Service Charge',
      remaining: 13,
      total: 40,
      amount: '10%',
      usage: 'ใช้งานอัตโนมัติ',
      type: 'เปอร์เซนต์ (%)', 
    },
 
  ];
  discounts_foods = [
    {
      id: 1,
      name: 'ส่วนลดอาหารรายเมนู 5%',
      remaining: 13,
      total: 40,
      amount: '5',
      usage: 'เลือกแล้ว (6)',
      type: 'เปอร์เซนต์ (%)', 
    },
    {
      id: 2,
      name: 'ส่วนลดอาหารรายเมนู 20 บาท',
      remaining: 13,
      total: 40,
      amount: '20',
      usage: 'เลือกแล้ว (6)',
      type: 'จำนวนเงิน (THB)',  
    },
  ];
  ex = [
    {
      id: 1,
      name: 'ค่าปรับอาหารเหลือ',
      remaining: 13,
      total: 50,
      amount: '5',
      usage: 'เลือกแล้ว (6)',
      type: 'จำนวนเงิน (ฺTHB)', 
    },
    {
      id: 2,
      name: 'แก้วแตก',
      remaining: 13,
      total: 20,
      amount: '20',
      usage: 'เลือกแล้ว (6)',
      type: 'จำนวนเงิน (THB)',  
    },
  ];
  constructor() { 

  }

  ngOnInit() {
  }
  handleClick(event: any,type:any) {
    this.select_tab = type
    const buttons = document.querySelectorAll('ion-button');
    buttons.forEach(button => button.classList.remove('clicked-button'));
    event.target.classList.add('clicked-button');
  }
  toggleEdit(id: number) {
    if (this.editingId === id) {
      this.editingId = null;
    } else {
      this.editingId = id;
    }
  }
  cancelEdit() {
    this.editingId = null;
  }
  addDiscount() {
    let newDiscount: any;
  
    switch (this.select_tab) {
      case 1:
        newDiscount = {
          id: this.discounts.length + 1,
          name: 'ส่วนลดใหม่',
          remaining: 0,
          total: 0,
          amount: '',
          usage: 'เลือกใช้เอง',
          type: '',
        };
        this.discounts.push(newDiscount);
        break;
      case 4:
        newDiscount = {
          id: this.discounts_foods.length + 1,
          name: 'ส่วนลดอาหารใหม่',
          remaining: 0,
          total: 0,
          amount: '',
          usage: 'เลือกใช้เอง',
          type: '',
        };
        this.discounts_foods.push(newDiscount);
        break;
      case 5:
        newDiscount = {
          id: this.ex.length + 1,
          name: 'เก็บเพิ่มใหม่',
          remaining: 0,
          total: 0,
          amount: '',
          usage: 'เลือกใช้เอง',
          type: '',
        };
        this.ex.push(newDiscount);
        break;
      default:
        break;
    }
  }
  
  deleteDiscount(index: number) {
    this.discounts.splice(index, 1);
  }
  deleteVAT(index: number) {
    this.vat.splice(index, 1);
  }
  showAddButton() {
    return this.select_tab !== 2 && this.select_tab !== 3;
  }
}
