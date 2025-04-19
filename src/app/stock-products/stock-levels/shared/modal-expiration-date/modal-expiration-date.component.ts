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
  IonLabel,
  IonCard,
  IonCardContent,
  IonToggle,
  IonIcon,
  IonFooter,
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';

import { ModalSelectDatePickerComponent } from '../modal-select-date-picker/modal-select-date-picker.component';
@Component({
  selector: 'app-modal-expiration-date',
  templateUrl: './modal-expiration-date.component.html',
  styleUrls: ['./modal-expiration-date.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButtons,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonCard,
    IonCardContent,
    IonToggle,
    IonIcon,
    IonFooter,
    CommonModule,
    FormsModule,
  ],
})
export class ModalExpirationDateComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  date_arr: any[] = [
    {
      data_id: 1,
      date: '31-10-2024',
    },
    {
      data_id: 2,
      date: '25-10-2024',
    },
    {
      data_id: 3,
      date: '20-10-2024',
    },
    {
      data_id: 4,
      date: '15-10-2024',
    },
  ];

  ngOnInit() {}

  // modal เพิ่มวันที่
  async addNewDate(id: number = 0) {
    const modal = await this.modalCtrl.create({
      component: ModalSelectDatePickerComponent,
      cssClass: 'my-custom-modal-select-expiration-date',
      mode: 'md',
      // showBackdrop: false
      componentProps: {
        selectedDate: '25-03-2025',//ข้อมูลที่ต้องการส่งไปให้ modal
        // selectedDate:this.date_arr[id].date,// ✅ ส่งค่าไปให้ modal
      },
    });
    await modal.present();
    const event: any = await modal.onDidDismiss();
    const date = event.data;

    if (event.role == 'save') {
      console.log(date);
    }
  }

  save() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
