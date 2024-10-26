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
import { ModalCancleComponent } from './modal-cancle/modal-cancle.component';
import { ModalCalculateComponent } from './modal-calculate/modal-calculate.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
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
  selectedZoneIndex: number | null = null; // ใช้ null เป็นค่าเริ่มต้น
  selectedTableIndex: number | null = null; // ใช้ null เป็นค่าเริ่มต้น
  selectedTableBasket: any[] = [];
  zone_pos: string[] = ['zone 1', 'zone 2'];
  select_zone: number = 0;
  basket : any
  is_charge_col = 4;
  public selectedTable: string | null = null;
  table_zone_pos: any[] = [
    {
      zone_id: 0,
      zone_name: 'Zone1',
      tables: [
        { name: 'A1', menu: [] },
        { name: 'A2', menu: [] },
        { name: 'A3', menu: [] },
        { name: 'A4', menu: [] },
        { name: 'A5', menu: [] },
        { name: 'A6', menu: [] },
        { name: 'A7', menu: [] },
        { name: 'A8', menu: [] },
        { name: 'A9', menu: [] },
        { name: 'A10', menu: [] },
        { name: 'A11', menu: [] },
        { name: 'A12', menu: [] },
        { name: 'A13', menu: [] },
        { name: 'A14', menu: [] },
        { name: 'A15', menu: [] },
      ],
      countdown: null,
      orders: [],
    },
    // Zone 2
    {
      zone_id: 1,
      zone_name: 'Zone2',
      tables: [
        { name: 'B1', menu: [] },
        { name: 'B2', menu: [] },
        { name: 'B3', menu: [] },
        { name: 'B4', menu: [] },
        { name: 'B5', menu: [] },
        { name: 'B6', menu: [] },
        { name: 'B7', menu: [] },
        { name: 'B8', menu: [] },
        { name: 'B9', menu: [] },
        { name: 'B10', menu: [] },
        { name: 'AB1', menu: [] },
        { name: 'B12', menu: [] },
        { name: 'B13', menu: [] },
        { name: 'B14', menu: [] },
        { name: 'B15', menu: [] },
      ],
      countdown: null,
      orders: [],
    },
  ];
  

  ngOnInit() {
    // this.openModalCalculate();
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

  public async openModal(zoneIndex: number, tableIndex: number) {
    if (zoneIndex !== null && tableIndex !== null) {
        this.selectedTable = this.table_zone_pos[zoneIndex].tables[tableIndex].name; // ใช้ชื่อโต๊ะ
        this.selectedTableBasket = this.table_zone_pos[zoneIndex].tables[tableIndex].menu; // ดึงรายการอาหารโต๊ะนั้น
  
        const modal = await this.modalCtrl.create({
            component: AddBasketComponent,
            cssClass: 'fullscreen',
            mode: 'ios',
            componentProps: {
                tableName: this.selectedTable
            }
        });
  
        await modal.present();
        const { data, role } = await modal.onWillDismiss();
  
        if (role === 'confirm') {
            // เพิ่มรายการอาหารไปยังโต๊ะที่ถูกเลือก
            this.table_zone_pos[zoneIndex].tables[tableIndex].menu.push(...data);
            console.log(`เพิ่มรายการอาหารที่โต๊ะ ${this.selectedTable}:`, data);
            
            // อัปเดต selectedTableBasket
            this.selectedTableBasket = this.table_zone_pos[zoneIndex].tables[tableIndex].menu;
        }
    } else {
        console.error("Zone index or table index is null.");
    }
  }

  public async openModal2() {
    const modal = await this.modalCtrl.create({
      // component: AddBasketComponent,
      component: ProductListComponent,
      cssClass: 'my-custom-modal-fullscreen',
      mode: 'ios',
      // showBackdrop: false
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  



  onTableClick(zoneIndex: number, tableIndex: number) { 
    const table = this.table_zone_pos[zoneIndex].tables[tableIndex];
  
    // เช็คว่าตารางนั้นมีเมนูอยู่หรือไม่
    if (table.menu.length > 0) {
        console.log(`Table ${table.name} already has existing menu items:`, table.menu);
        // กำหนด selectedTableBasket ให้เป็นเมนูของโต๊ะนั้น
        this.selectedTableBasket = table.menu; // เพิ่มการอัปเดตนี้
        return; // ออกจากฟังก์ชันโดยไม่ทำอะไร
    }
  
    // ถ้าไม่มีเมนู ตรวจสอบว่ามีการนับเวลาถอยหลังหรือไม่
    if (table.countdown) {
        console.log(`Table ${table.name} already has a countdown.`);
        // เรียกใช้ฟังก์ชัน openModal()
        this.openModal(zoneIndex, tableIndex);
    } else {
        // ถ้าไม่มีการนับเวลาถอยหลัง เปิด modal เพื่อรอการยืนยัน
        console.log(`Table ${table.name} has no existing orders. Opening confirmation modal.`);
        this.openModalType(zoneIndex, tableIndex);
    }
  
    // บันทึกค่าของ zoneIndex และ tableIndex
    this.selectedZoneIndex = zoneIndex;
    this.selectedTableIndex = tableIndex;
  }
  
  

  public async openModalType(zoneIndex: number, tableIndex: number) {
    const combinedIndex = zoneIndex * 1000 + tableIndex; // สร้าง index ที่ไม่ซ้ำกัน
    const table = this.table_zone_pos[zoneIndex].tables[tableIndex];
  
    if (table.countdown) {
      // ถ้ามีการนับเวลาถอยหลัง ให้แสดงชื่อโต๊ะใน console
      console.log(`Table ${table.name} is already opened. Countdown: ${table.countdown}`);
    } else {
      // ถ้ายังไม่มีการนับเวลาถอยหลัง เปิด modal เพื่อรอการยืนยัน
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
public async openModalCancle() {


  const modal = await this.modalCtrl.create({
    component: ModalCancleComponent,
    cssClass: 'modal-pos-cancle',
    mode: 'ios',
    componentProps: { }, // Pass combined index
  });

  await modal.present();
  const { data, role } = await modal.onWillDismiss();

  if (role === 'confirm') {
    console.log('confirm cancle');
  }
}
public async openModalCalculate() {
  const totalAmount = this.calculateTotalAmount(); // คำนวณราคารวม
  console.log(totalAmount);
  
  const modal = await this.modalCtrl.create({
    component: ModalCalculateComponent,
    cssClass: 'modal-pos-calculate',
    mode: 'ios',
    componentProps: { totalAmount }, // ส่งราคารวมไปยัง Modal
  });

  await modal.present();
  const { data, role } = await modal.onWillDismiss();

  if (role === 'confirm') {
    console.log('ยืนยันการชำระเงิน');
    console.log(`เงินสด: ${data.cash.toFixed(2)} บาท`);
    console.log(`เงินทอน: ${data.change.toFixed(2)} บาท`);
  }
}
calculateTotalAmount() {
  let totalAmount = 0;

  this.selectedTableBasket.forEach((item: any) => {
    totalAmount += item.price * item.count; // ราคารายการคูณจำนวน
   
    
    item.options.forEach((option: any) => {
      option.choice.forEach((choice: any) => {
        if (choice.selected) {
          totalAmount += choice.po_price;
        }
      });
    });
  });

  return totalAmount;
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


    // modal แสดงรายการอาหารที่สั่ง ของแต่ละโต๊ะ
    async openOrderList() {
      const modal = await this.modalCtrl.create({
        // component: AddBasketComponent,
        component: OrderListComponent,
        cssClass: 'my-custom-modal-order-list',
        mode: 'ios',
        // showBackdrop: false
      });
      await modal.present();
      const { data, role } = await modal.onWillDismiss();
      if (role === 'confirm') {
        // this.message = `Hello, ${data}!`;
      }
    }
}
