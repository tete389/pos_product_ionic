import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonContent,
  IonButtons,
  IonButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonToggle,
  IonItem,
  IonIcon,
  IonFooter,
  ModalController,
} from '@ionic/angular/standalone';
import { IonDatetimeValueAccessorDirective } from 'src/datetime-stand-alone'; 

@Component({
  selector: 'app-date-pick',
  templateUrl: './date-pick.component.html',
  styleUrls: ['./date-pick.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButtons,
    IonButton,
    IonLabel,
    IonCard,
    IonCardContent,
    IonToggle,
    IonItem,
    IonIcon,
    IonFooter,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonDatetimeValueAccessorDirective, // เพิ่ม Directive ตรงนี้
  ],
})
export class DatePickComponent implements OnInit {

  selectedDate!: string;
  to_day: any = new Date();
  constructor(public modalController: ModalController) {}

  ngOnInit() {
    this.selectedDate = this.formatDate(this.to_day);
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()]; // ไม่ต้องเพิ่ม 1 เพราะ getMonth() เริ่มจาก 0
    const year = date.getFullYear();
    return `${day} ${month},${year}`;
  }
  

  onDateChange(event: any) {
    console.log('วันที่เปลี่ยน:', event.detail.value);
    if (event.detail.value == undefined || event.detail.value == null) {
      this.selectedDate = this.formatDate(this.to_day);
    } else {
      this.selectedDate = this.formatDate(event.detail.value);
    }
  }

  confirmDate() {
    console.log('วันที่ยืนยัน:', this.selectedDate);
    this.modalController.dismiss(this.selectedDate, 'save');
  }
}
