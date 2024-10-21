import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
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
interface Item {
  label: string;
  value: string;
  checked: boolean;
}
@Component({
  selector: 'app-modal-taxe',
  templateUrl: './modal-taxe.component.html',
  styleUrls: ['./modal-taxe.component.scss'],
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

export class ModalTaxeComponent  implements OnInit {
  items: Item[] = [];
  checkedCount = 0;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.showDiscountItems(); // เริ่มต้นด้วยการแสดงส่วนลด
  }

  // แสดงข้อมูลส่วนลด
  showDiscountItems() {
    this.items = [
      { label: 'ส่วนลดวันเกิด', value: '-20%', checked: false },
      { label: 'ส่วนลดเดือนเกิด', value: '-15%', checked: false },
      { label: 'ส่วนลดโปรเปิดร้าน', value: '-10%', checked: false },
      { label: 'ส่วนลด 4 จ่าย 3', value: '-399 บาท', checked: false },
    ];
    this.updateCheckedCount();
  }

  // แสดงข้อมูล Service Charge
  showServiceCharge() {
    this.items = [{ label: 'Service Charge', value: '10%', checked: false }];
    this.updateCheckedCount();
  }

  // แสดงข้อมูลเก็บเพิ่ม
  showExtraCharge() {
    this.items = [{ label: 'ค่าปรับอาหารเหลือ', value: '15%', checked: false }];
    this.updateCheckedCount();
  }

  toggleCheckbox(event: any, index: number) {
    this.items[index].checked = event.detail.checked;
    this.updateCheckedCount();
  }

  updateCheckedCount() {
    this.checkedCount = this.items.filter((item) => item.checked).length;
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async confirmSelection() {
    await this.modalCtrl.dismiss(null, 'confirm');
  }
}
