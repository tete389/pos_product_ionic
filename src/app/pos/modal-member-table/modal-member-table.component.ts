import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  ModalController,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonSegmentButton,
  IonSegment,
  IonLabel,
  IonicSlides,
  IonBadge,
  IonSelect,
  IonPopover,
  IonModal,
  IonSearchbar
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-member-table',
  templateUrl: './modal-member-table.component.html',
  styleUrls: ['./modal-member-table.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalMemberTableComponent implements OnInit {

  // ตัวอย่าง mock data ที่จะใช้ส่งกลับไปยังหน้าที่เปิด modal
  mockData = {
    memberId: 'MB-00005',
    name: 'Laphat',
    nickname: 'อิ้ว',
    birthDate: '13/11/1996',
    age: 28,
    phone: '0981299734',
    email: 'example@email.com',
    gender: 'ชาย',
    line: 'ยังไม่เพิ่มไลน์'
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  // ปิด modal โดยไม่ส่งข้อมูลกลับ
  closed() {
    this.modalCtrl.dismiss();
  }

  // ยืนยันการบันทึกและส่งข้อมูล mockData กลับไปยังหน้าที่เปิด modal
  async confirm() {
    await this.modalCtrl.dismiss(this.mockData, 'confirm');
  }
}