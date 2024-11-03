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
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
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
    CommonModule,
    FormsModule,
  ],
})
export class OrderListComponent implements OnInit {
  tab_active = '0';
  checked: boolean = true;

  select_items: any[] = [];

  constructor(
    private modalController: ModalController,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  selectItem() {
    this.select_items.length > 0
      ? (this.select_items = [])
      : this.select_items.push(1);
  }

  // alert confirm ยกเลิกรายการอาหาร
  async openConfirmCancelOrder() {
    const alert = await this.alertController.create({
      cssClass: 'app-alert-button-confirm-red-2',
      mode: 'md',
      header: 'ยืนยันการยกเลิก',
      message: `รายการอาหาร`,
      backdropDismiss: false,
      buttons: [
        {
          text: `cancel`,
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah: any) => {},
        },
        {
          text: `yes`,
          cssClass: 'success',
          handler: () => {
            console.log('ยืนยัน');
          },
        },
      ],
    });
    await alert.present();
  }

  // alert confirm รายการอาหารนี้หมด
  async openConfirmOosOrder() {
    const alert = await this.alertController.create({
      cssClass: 'app-alert-button-confirm-red-2',
      mode: 'md',
      header: 'ยืนยันรายการอาหารหมด',
      message: `รายการที่หมดจะไม่สามารถสั่งได้อีก <br>
จนกว่าจะไปเปลี่ยนสถานะในหน้าเมนู`,
      backdropDismiss: false,
      buttons: [
        {
          text: `cancel`,
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah: any) => {},
        },
        {
          text: `yes`,
          cssClass: 'success',
          handler: () => {
            console.log('ยืนยัน');
          },
        },
      ],
    });
    await alert.present();
  }

  // alert confirm เปลี่ยนสถานะรายการอาหาร ที่เลือก
  async openConfirmChangeStatus() {
    const alert = await this.alertController.create({
      cssClass: 'app-alert-confirm-change-status',
      mode: 'md',
      header: 'เลือกสถานะ',
      // message: `รายการอาหาร`,
      backdropDismiss: false,
      buttons: [
        {
          text: `สั่งแล้ว`,
          cssClass: 'status',
          handler: (blah: any) => {
            console.log('สั่งแล้ว');
          },
        },
        {
          text: `กำลังเตรียม`,
          cssClass: 'status',
          handler: (blah: any) => {
            console.log('กำลังเตรียม');
          },
        },
        {
          text: `เสร็จแล้ว`,
          cssClass: 'status',
          handler: (blah: any) => {
            console.log('เสร็จแล้ว');
          },
        },
        {
          text: `เสริฟแล้ว`,
          cssClass: 'status',
          handler: (blah: any) => {
            console.log('เสริฟแล้ว');
          },
        },
        {
          text: `ย้อนกลับ`,
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah: any) => {},
        },
      ],
    });
    await alert.present();
  }

  close() {
    this.modalController.dismiss({ close: false });
  }
}
