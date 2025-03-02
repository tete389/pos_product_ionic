import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
  IonSegment,
  IonIcon,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonButtons,
  IonButton,
  ModalController,
} from '@ionic/angular/standalone';
import { ModalReceiveComponent } from './modal-receive/modal-receive.component';
import { ModalWithdrawComponent } from './modal-withdraw/modal-withdraw.component';

@Component({
  selector: 'app-stock-levels',
  templateUrl: './stock-levels.component.html',
  styleUrls: ['./stock-levels.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonProgressBar,
    IonSegment,
    IonIcon,
    IonSegmentButton,
    IonSelect,
    IonModal,
    IonButtons,
    IonButton,
    IonSelectOption,
    CommonModule,
    FormsModule,
  ],
})
export class StockLevelsComponent implements OnInit {
  customPopoverOptionsStyle3 = {
    cssClass: 'my-custom-customPopover-select-style-3',
  };

  customPopoverOptionsStyle4 = {
    cssClass: 'my-custom-customPopover-select-style-4',
  };
  customPopoverOptionsStyle1 = {
    cssClass: 'my-custom-customPopover-select-style-1',
  };

  // กรองสินค้า ตามประเภทสินค้า
  sort_by: any = 0;
  // การแสดงผล
  select_by: any = 0;
  select_period_number: number = 2;

  stock_items: any[] = [
    { name: 'Daimond', percen: 45 },
    { name: 'Daimond', percen: 15 },
    { name: 'Silver', percen: 10 },
    { name: 'Platinum', percen: 7 },
    { name: 'General', percen: 5 },
    { name: 'Platinum', percen: 10 },
    { name: 'Daimond', percen: 10 },
    { name: 'Gold', percen: 10 },
    { name: 'Gold', percen: 10 },
    { name: 'General', percen: 10 },
    { name: 'Daimond', percen: 10 },
  ];

  product_type_arr: any[] = [
    {
      pro_type_id: 0,
      name: 'ทั้งหมด',
    },
    {
      pro_type_id: 1,
      name: 'เนื้อสัตว์',
    },
    {
      pro_type_id: 2,
      name: 'ผัก',
    },
    {
      pro_type_id: 3,
      name: 'เครื่องปรุง',
    },
    {
      pro_type_id: 4,
      name: 'ผลไม้',
    },
    {
      pro_type_id: 5,
      name: 'ธัญพืช',
    },
    {
      pro_type_id: 6,
      name: 'เส้น',
    },
  ];

  sort_type_display: any[] = [
    {
      std_id: 0,
      name: 'ทั้งหมด',
    },
    {
      std_id: 1,
      name: 'ใกล้หมด',
    },
    {
      std_id: 2,
      name: 'เหลือน้อย',
    },
    {
      std_id: 3,
      name: 'เพียงพอ',
    },
  ];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    // setTimeout(() => {
    //   this.receive();
    // }, 1000);
  }

  select_period(number_tab: number) {
    this.select_period_number = number_tab;
  }

  getTabColorClass(index: number): string {
    return 'tab-color-' + index;
  }

  // modal หน้ารับเข้า
  async receive(item: any = {}) {
    const modal = await this.modalCtrl.create({
      // component: AddBasketComponent,
      component: ModalReceiveComponent,
      cssClass: 'my-custom-modal-fullscreen',
      componentProps: {
        item: item,
      },
      // mode: 'ios',
      // showBackdrop: false
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

  // modal หน้าเบิกออก
  async widthdraw(item: any = {}) {
    const modal = await this.modalCtrl.create({
      // component: AddBasketComponent,
      component: ModalWithdrawComponent,
      cssClass: 'my-custom-modal-fullscreen',
      componentProps: {
        item: item,
      },
      // mode: 'ios',
      // showBackdrop: false
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

  changeStatus(event: any, item: any) {
    console.log(event.detail.value);
    console.log(item);

    switch (Number(event.detail.value)) {
      // รับเข้าสินค้ารายการเดียว
      case 1: {
        console.log('1');
        this.receive(item);
        break;
      }
      // เบิกออกสินค้ารายการเดียว
      case 2: {

        this.widthdraw(item);
        break;
      }
    }
  }
}
