import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
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
import { ModalSelectMemberComponent } from '../modal-select-member/modal-select-member.component';
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
  @Input() totalAmount: number = 0; // รับค่า input โดยตรง
  cashAmount: number = 0;
  changeAmount: number = 0;
  memberData: any
  selectedPaymentMethod: string = '';

  constructor(private modalCtrl: ModalController) {}

  public async openModaSelectMember() {
    const modal = await this.modalCtrl.create({
      component: ModalSelectMemberComponent,
      cssClass: 'modal-pos-member',
      mode: 'ios',
      componentProps: {} // คุณสามารถส่งค่าเพิ่มเติมได้ถ้าต้องการ
    });
  
    await modal.present();
    
    const { data, role } = await modal.onWillDismiss();
  
    if (role === 'confirm') {
      // ตรวจสอบว่ามีข้อมูล data ที่ส่งกลับมาจาก modal หรือไม่
      console.log('Data received from modal:', data);
  
      // ดำเนินการกับข้อมูลที่ได้รับ เช่น แสดงใน console หรือเก็บไว้ในตัวแปร
      this.memberData = data
    }
  }
  ngOnInit() {
    console.log('Received totalAmount:', this.totalAmount); // ตรวจสอบค่า
  }
  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
  }
  
  calculateChange() {
    this.changeAmount = this.cashAmount - this.totalAmount;
  }

  onCashInput(value: number) {
    this.cashAmount += value;
    this.calculateChange();
  }

  clearCash() {
    this.cashAmount = 0;
    this.changeAmount = 0;
  }

  payExact() {
    this.cashAmount = this.totalAmount;
    this.calculateChange();
  }

  async confirm() {
    await this.modalCtrl.dismiss(
      { cash: this.cashAmount, change: this.changeAmount },
      'confirm'
    );
  }

  closed() {
    this.modalCtrl.dismiss();
  }
}