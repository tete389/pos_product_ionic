import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonContent,
  IonButtons,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonToggle,
  IonIcon,
  IonFooter,
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-select-date',
  templateUrl: './modal-select-date.component.html',
  styleUrls: ['./modal-select-date.component.scss'],
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
  ],
})
export class ModalSelectDateComponent implements OnInit {
  selectedDate!: string;
  to_day: any = new Date();
  constructor(public modalController: ModalController) {}

  ngOnInit() {
    this.selectedDate = this.formatDate(this.to_day);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // เพิ่ม 1 เพราะเดือนเริ่มจาก 0
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // เลือกวันเ
  onDateChange(event: any) {
    console.log('วันที่เปลี่ยน:', event.detail.value);
    // console.log(event.detail.value);
    if (event.detail.value == undefined || event.detail.value == null) {
      this.selectedDate = this.formatDate(this.to_day);
    } else {
      this.selectedDate = this.formatDate(event.detail.value);
    }
  }

  confirmDate() {
    console.log('วันที่ยืนยัน:', this.selectedDate);
    // เขียนโค้ดการจัดการเมื่อยืนยันวันที่ที่นี่
    this.modalController.dismiss(this.selectedDate, 'save');
  }
}
