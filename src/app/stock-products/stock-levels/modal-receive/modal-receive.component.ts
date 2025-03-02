import { Component, OnInit } from '@angular/core';
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
  AlertController,
  LoadingController,
  IonItem,
  IonIcon,
  IonSegmentButton,
  IonSegment,
  IonLabel,
  IonBadge,
  IonCard,
  IonCardContent,
  IonList,
  IonFooter,
  IonNavLink,
  IonThumbnail,
  IonicSlides,
  IonModal,
  IonGrid,
  IonCol,
  IonRow,
  IonPopover,
  IonInput,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { ModalShowDraftComponent } from '../modal-show-draft/modal-show-draft.component';
import { ModalShowItemsComponent } from '../modal-show-items/modal-show-items.component';


@Component({
  selector: 'app-modal-receive',
  templateUrl: './modal-receive.component.html',
  styleUrls: ['./modal-receive.component.scss'],
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
    IonFooter,
    // IonProgressBar,
    IonSegment,
    IonIcon,
    IonSegmentButton,
    // IonSelect,
    IonModal,
    IonButtons,
    IonButton,
    IonInput,
    IonSelect,
    IonSelectOption,
    // IonSelectOption,
    CommonModule,
    FormsModule,
  ],
})
export class ModalReceiveComponent implements OnInit {
  customPopoverOptionsStyle3 = {
    cssClass: 'my-custom-customPopover-select-style-3',
  };

  type_receive_arr: any[] = [
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

  all_supplier_arr: any[] = [
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

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    // setTimeout(() => {
    //   this.select_items();
    // }, 500);
  }

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }


  //เลือบสินค้าที่จะรับเข้า
  async select_items() {
    const modal = await this.modalCtrl.create({
      component: ModalShowItemsComponent,
      cssClass: 'my-custom-modal-show-items',
      mode: 'md',
      // showBackdrop: false
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  
  //แสดงข้อมูลที่ draft ทั้งหมด
  async show_all_draft() {
    const modal = await this.modalCtrl.create({
      component: ModalShowDraftComponent,
      cssClass: 'my-custom-modal-show-draft',
      mode: 'md',
      // showBackdrop: false
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }


  save_draft() {
    // this.modalCtrl.dismiss(null, 'save_draft');
  }

  // รับเข้าสินค้า
  recrive() {
    // this.modalCtrl.dismiss(null, 'recrive');
  }
}
