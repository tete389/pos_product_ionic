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
  IonFooter,
  NavParams,
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';

/*
 **component นี้เป็น modal สำหรับ
 * เลือกประเภทการรับเข้า
 * เลือกประเภทการเบิกออก
 * เลือก Supplier
 */

@Component({
  selector: 'app-modal-select-transaction-type',
  templateUrl: './modal-select-transaction-type.component.html',
  styleUrls: ['./modal-select-transaction-type.component.scss'],
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
    IonFooter,
    CommonModule,
    FormsModule,
  ],
})
export class ModalSelectTransactionTypeComponent implements OnInit {
  /*
   **  ประเภทการแสดง select
   * 'receive'  = รับเข้า
   * 'withdraw' = เบิกออก
   * 'supplier' = 'ผู้ผลิด'
   */
  type_select: string = '';
  id_select: number = 0;

  text_title: string = 'เลือก';

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    this.type_select = navParams.get('type_select');
    this.id_select = navParams.get('id_select');
  }

  // เลือกประเภทการรับเข้า
  type_receive_arr: any[] = [];
  // เลือกประเภทการเบิกออก
  type_withdraw_arr: any[] = [];
  // เลือก Supplier
  all_supplier_arr: any[] = [];

  ngOnInit() {

console.log(this.type_select, this.id_select);


    switch (this.type_select) {
      case 'receive':
        this.text_title = 'เลือกประเภทการรับเข้า';
        this.type_receive_arr = this.getDataReceive();
        break;

      case 'withdraw':
        this.text_title = 'เลือกประเภทการเบิกออก';
        this.type_withdraw_arr = this.getDatawithdraw();
        break;

      case 'supplier':
        this.text_title = 'เลือก Supplier';
        this.all_supplier_arr = this.getDatasupplier();
        break;
        default: return;
    }
  }

  save() {
    
  }

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  // api เลือกประเภทการรับเข้า
  getDataReceive() {
    // ดึงข้อมูลจาก API ตรงนี้
    //แล้วเอาข้อมูลไปใส่ในตัวแปร this.type_receive_arr
    return [
      {
        tr_id: 0,
        name: 'New Purchase',
      },
      {
        tr_id: 1,
        name: 'Receiving from Supplier',
      },
      {
        tr_id: 2,
        name: 'Restocking from Storage',
      },
      {
        tr_id: 3,
        name: 'Return to Stock',
      },
      {
        tr_id: 4,
        name: 'Internal Transfer',
      },
      {
        tr_id: 5,
        name: 'Correction of Inventory Error',
      },
      {
        tr_id: 6,
        name: 'Donation or Free Stock',
      },
      {
        tr_id: 7,
        name: 'Production or Assembly',
      },
      {
        tr_id: 8,
        name: 'Other',
      },
    ];
  }
  // api เลือกประเภทการเบิกออก
  getDatawithdraw() {
    // ดึงข้อมูลจาก API ตรงนี้
    //แล้วเอาข้อมูลไปใส่ในตัวแปร this.type_withdraw_arr
    return [
      {
        tw_id: 0,
        name: 'New Purchase',
      },
      {
        tw_id: 1,
        name: 'Receiving from Supplier',
      },
      {
        tw_id: 2,
        name: 'Restocking from Storage',
      },
      {
        tw_id: 3,
        name: 'Return to Stock',
      },
      {
        tw_id: 4,
        name: 'Internal Transfer',
      },
      {
        tw_id: 5,
        name: 'Correction of Inventory Error',
      },
      {
        tw_id: 6,
        name: 'Donation or Free Stock',
      },
      {
        tw_id: 7,
        name: 'Production or Assembly',
      },
      {
        tw_id: 8,
        name: 'Other',
      },
    ];
  }
  // api เลือก Supplier
  getDatasupplier() {
    // ดึงข้อมูลจาก API ตรงนี้
    //แล้วเอาข้อมูลไปใส่ในตัวแปร this.all_supplier_arr
    return [
      {
        as_id: 0,
        name: 'New Purchase',
      },
      {
        as_id: 1,
        name: 'Receiving from Supplier',
      },
      {
        as_id: 2,
        name: 'Restocking from Storage',
      },
      {
        as_id: 3,
        name: 'Return to Stock',
      },
      {
        as_id: 4,
        name: 'Internal Transfer',
      },
      {
        as_id: 5,
        name: 'Correction of Inventory Error',
      },
      {
        as_id: 6,
        name: 'Donation or Free Stock',
      },
      {
        as_id: 7,
        name: 'Production or Assembly',
      },
      {
        as_id: 8,
        name: 'Other',
      },
    ];
  }

  select_transection_type(id: number) {
    console.log(id);
    this.id_select = id;

    this.modalCtrl.dismiss(this.id_select, 'save');
  }
}
