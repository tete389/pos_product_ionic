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
  selector: 'app-modal-calculate',
  templateUrl: './modal-calculate.component.html',
  styleUrls: ['./modal-calculate.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonLabel,
    IonCol,
    IonRow,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonSegmentButton,
    IonSegment,
    IonLabel,
    IonBadge,
    IonSelect,
    IonPopover,
    IonModal,
    IonSearchbar
  ],


})
export class ModalCalculateComponent implements OnInit {
  totalAmount: number = 540.00; // ยอดชำระทั้งหมด
  cashAmount: number = 0; // เงินสดที่รับ
  changeAmount: number = 0; // เงินทอน

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  // คำนวณเงินทอน
  calculateChange() {
    this.changeAmount = this.cashAmount - this.totalAmount;
  }

  // เมื่อผู้ใช้กดปุ่มเพิ่มเงินสด
  onCashInput(value: number) {
    this.cashAmount += value;
    this.calculateChange();
  }

  // เคลียร์ยอดเงินสดและเงินทอน
  clearCash() {
    this.cashAmount = 0;
    this.changeAmount = 0;
  }

  // เมื่อกดปุ่ม "พอดี" จะตั้งค่าเงินสดให้เท่ากับยอดชำระ
  payExact() {
    this.cashAmount = this.totalAmount;
    this.calculateChange();
  }

  // ยืนยันการชำระเงิน
  async confirm() {
    await this.modalCtrl.dismiss({
      cash: this.cashAmount,
      change: this.changeAmount,
    }, 'confirm');
  }

  // ปิด Modal
  closed() {
    this.modalCtrl.dismiss();
  }
}
