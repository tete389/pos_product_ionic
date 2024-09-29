import {
  Component,
  OnInit,
  OnDestroy,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
import Swiper from 'swiper';
import { AddBasketComponent } from './add-basket/add-basket.component';
import { ModalTypeComponent } from './modal-type/modal-type.component';
import { ModalTaxeComponent } from '../discounts-taxe/modal-taxe/modal-taxe.component';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.page.html',
  styleUrls: ['./pos.page.scss'],
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
export class PosPage implements OnInit {
  swiperModules = [IonicSlides];
  @ViewChild('swiper') swiperRef?: ElementRef | undefined;
  swiper?: Swiper;

  @ViewChild(IonModal) modalMember: IonModal | undefined;

  constructor(private modalCtrl: ModalController) {}

  zone_pos: string[] = ['zone 1', 'zone 2'];
  select_zone: number = 0;
  basket : any
  is_charge_col = 4;
  table_pos: any[] = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'A11',
    'A12',
    'A13',
    'A14',
    'A15',
  ];

  table_zone_pos: any[] = [
    {
      zone_id: 0,
      zone_name: 'Zone1',
      tables: [
        'A1',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'A7',
        'A8',
        'A9',
        'A10',
        'A11',
        'A12',
        'A13',
        'A14',
        'A15',
        'A16',
        'A17',
        'A18',
        'A19',
        'A20',
        'A9',
        'A10',
        'A11',
        'A12',
        'A13',
        'A14',
        'A15',
        'A16',
        'A17',
        'A18',
        'A19',
        'A20',
      ],
      countdown:null,
      orders: [],
    },
    {
      zone_id: 1,
      zone_name: 'Zone2',
      tables: [
        'B1',
        'B2',
        'B3',
        'B4',
        'B5',
        'B6',
        'B7',
        'B8',
        'B9',
        'B10',
        'AB1',
        'B12',
        'B13',
        'B14',
        'B15',
      ],
      countdown:null,
      orders: [],
    },
  ];

  ngOnInit() {
    // this.openModalTaxe();
  }

  customPopoverOptionsStyle2 = {
    // cssClass: 'my-custom-customPopover-select-style-2',
  };

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
    this.swiper?.disable();
  }

  swiperSlideCharge() {
    const index = this.swiperRef?.nativeElement.swiper.activeIndex;
    // if (this.select_group_page != index) {
    //   this.select_group_page = index;
    //   this.select_group(Number(index));
    // }
  }

  public charge(col: number) {
    this.is_charge_col = col;
  }

  buttonLabel: string = '5'; // แสดงป้ายกำกับที่ 5
  toggleCharge() {
    // เปลี่ยนค่าของ is_charge_col และป้ายกำกับ
    if (this.is_charge_col === 5) {
      this.is_charge_col = 4;
      this.buttonLabel = '4';
    } else {
      this.is_charge_col = 5;
      this.buttonLabel = '5';
    }
  }
  public async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddBasketComponent,
      cssClass: 'fullscreen',
      mode: 'ios',
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
  
    if (role === 'confirm') {
      // รับข้อมูลที่ส่งกลับจาก modal
      this.basket = data; // เก็บข้อมูลที่ส่งกลับมา
      console.log(this.basket); // แสดงข้อมูลใน console เพื่อดูว่าได้ข้อมูลมาไหม
    }
  }
  
  public async openModalType(zoneIndex: number, tableIndex: number) {
    const combinedIndex = zoneIndex * 1000 + tableIndex; // สร้าง index ที่ไม่ซ้ำกัน
    const modal = await this.modalCtrl.create({
      component: ModalTypeComponent,
      cssClass: 'modal-pos-type',
      mode: 'ios',
    });

    await modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data && data.countdown) {
      this.updateTableColor(combinedIndex); // เปลี่ยนสีเป็นสีเขียว
      this.startCountdown(combinedIndex, data.countdown); // เริ่มนับเวลาถอยหลัง
    }
  }

  // ฟังก์ชันเปลี่ยนสีของโต๊ะเป็นสีเขียว
  updateTableColor(combinedIndex: number) {
    const zoneIndex = Math.floor(combinedIndex / 1000);
    const tableIndex = combinedIndex % 1000;

    const greenColor = '#1BC64A'; // สีเขียว

    // ตรวจสอบว่า table เป็น Object หรือไม่
    if (typeof this.table_zone_pos[zoneIndex].tables[tableIndex] === 'object') {
      this.table_zone_pos[zoneIndex].tables[tableIndex] = {
        ...this.table_zone_pos[zoneIndex].tables[tableIndex],
        color: greenColor
      };
    } else {
      this.table_zone_pos[zoneIndex].tables[tableIndex] = {
        name: this.table_zone_pos[zoneIndex].tables[tableIndex],
        color: greenColor
      };
    }

    this.table_zone_pos = [...this.table_zone_pos]; // ทำให้ Angular อัปเดต UI
  }

 // ฟังก์ชันนับเวลาถอยหลัง
startCountdown(combinedIndex: number, countdown: number) {
  const zoneIndex = Math.floor(combinedIndex / 1000);
  const tableIndex = combinedIndex % 1000;

  const interval = setInterval(() => {
    countdown--;

    if (countdown >= 0) {
      // อัปเดต countdown ของโต๊ะนั้น
      if (typeof this.table_zone_pos[zoneIndex].tables[tableIndex] === 'object') {
        this.table_zone_pos[zoneIndex].tables[tableIndex].countdown = this.formatTime(countdown);
      } else {
        this.table_zone_pos[zoneIndex].tables[tableIndex] = {
          name: this.table_zone_pos[zoneIndex].tables[tableIndex],
          countdown: this.formatTime(countdown),
          color: '#1BC64A' // สีเขียวเมื่อเริ่มนับถอยหลัง
        };
      }

      this.table_zone_pos = [...this.table_zone_pos]; // ทำให้ Angular อัปเดต UI
    }

    // เมื่อเวลาหมดให้เปลี่ยนสีเป็นสีแดง
    if (countdown <= 0) {
      clearInterval(interval);
      this.updateTableColorToRed(combinedIndex);
    }
  }, 1000);
}

// ฟังก์ชันเปลี่ยนสีเป็นสีแดงเมื่อเวลาหมด
updateTableColorToRed(combinedIndex: number) {
  const zoneIndex = Math.floor(combinedIndex / 1000);
  const tableIndex = combinedIndex % 1000;

  const redColor = '#FF0000'; // สีแดง

  if (typeof this.table_zone_pos[zoneIndex].tables[tableIndex] === 'object') {
    this.table_zone_pos[zoneIndex].tables[tableIndex].color = redColor;
  } else {
    this.table_zone_pos[zoneIndex].tables[tableIndex] = {
      name: this.table_zone_pos[zoneIndex].tables[tableIndex],
      color: redColor
    };
  }

  this.table_zone_pos = [...this.table_zone_pos]; // ทำให้ Angular อัปเดต UI
}

// ฟังก์ชันแปลงเวลาจากวินาทีเป็น ชั่วโมง:นาที:วินาที
formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
}

// ฟังก์ชันเสริมเพื่อเติม 0 ถ้าค่ามีแค่หลักเดียว
pad(num: number): string {
  return num < 10 ? '0' + num : num.toString();
}

  public async openModalTaxe() {


    const modal = await this.modalCtrl.create({
      component: ModalTaxeComponent,
      cssClass: 'modal-pos-type',
      mode: 'ios',
      componentProps: { }, // Pass combined index
    });
  
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
  
    if (role === 'confirm') {
      console.log('confirm 1140');
    }
  }
 

  


  public select_zone_event(event: any) {
    this.swiper?.enable();
    this.select_zone = event.detail.value;
    this.swiper?.slideTo(event.detail.value);
    this.swiper?.disable();
  }

  ////// modal member
  public onWillDismiss(event: any) {}

  cancel() {
    this.modalMember?.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalMember?.dismiss('', 'confirm');
  }
}
