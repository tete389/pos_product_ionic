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
  items:any = [
    { label: 'ส่วนลดวันเกิด', value: '+7%' },
    { label: 'ส่วนลดวันเกิด', value: '-20%' },
    { label: 'ส่วนลดเดือนเกิด', value: '-15%' },
    { label: 'ส่วนลดโปรเปิดร้าน', value: '-10%' },
    { label: 'ส่วนลด 4 จ่าย 3', value: '-399 บาท' }
  ];

  checkedCount = 0;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  toggleCheckbox(event: any, index: number) {
    this.items[index].checked = event.detail.checked;
    this.updateCheckedCount(); // อัพเดทจำนวน checkbox ที่ถูกติ๊ก
  }

  updateCheckedCount() {
    this.checkedCount = this.items.filter((item: Item) => item.checked).length;
  }
  async closeModal() {
    await this.modalCtrl.dismiss();
  }
  async confirmSelection() {
    await this.modalCtrl.dismiss(null, 'confirm');
  }
}
