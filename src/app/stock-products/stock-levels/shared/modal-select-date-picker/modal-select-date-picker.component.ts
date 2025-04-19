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
  NavParams,
  IonDatetime,
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';
/*
 **component นี้เป็น modal สำหรับ
 * เลือกวันที่ | วัน เดือน ปี
 */

@Component({
  selector: 'app-modal-select-date-picker',
  templateUrl: './modal-select-date-picker.component.html',
  styleUrls: ['./modal-select-date-picker.component.scss'],
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
    IonDatetime,
    CommonModule,
    FormsModule,
  ],
})
export class ModalSelectDatePickerComponent implements OnInit {
  //  ถ้าไม่ส่งค่ามาให้ใช้วันปัจจุบัน
  selectedDate: string = new Date().toISOString(); // ✅ ต้องเป็น ISO format
  to_day: any = new Date();
  constructor(
    private modalController: ModalController,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    // ถ้าส่งค่ามาให้ใช้ค่าที่ส่งมา แปลงเป็น ISO format
    if (
      this.navParams.get('selectedDate') !== undefined &&
      this.navParams.get('selectedDate') !== null &&
      this.navParams.get('selectedDate') !== ''
    ) {
      this.selectedDate = this.convertToISOStringLocal(
        this.navParams.get('selectedDate')
      );
      
    }
    
  }

  // แปลงวันที่ 'dd-mm-yyyy' เป็น ISO String
  convertToISOStringLocal(dateStr: string): string {
    const [day, month, year] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0') +
      'T00:00:00'
    );
  }
  // แปลง iso ให้เป็นวันที่ 'dd-mm-yyyy'
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
  }

  // ตรวจสอบว่าเป็น ISO String หรือไม่
  isISOString(dateStr: string): boolean {
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3}Z?)?$/.test(dateStr);
  }

  confirmDate() {
    // console.log('วันที่ยืนยัน:', this.selectedDate);

    console.log(this.isISOString(this.selectedDate));

    // ถ้าเป็น ISO String ให้แปลงเป็น 'dd-mm-yyyy'
    if (this.isISOString(this.selectedDate)) {
      this.selectedDate = this.formatDate(this.selectedDate);
    }

    console.log('ส่งค่า:', this.selectedDate);
    this.modalController.dismiss(this.selectedDate, 'save');
  }

  close() {
    this.modalController.dismiss(null, 'cancel');
  }
}
