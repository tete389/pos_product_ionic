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
@Component({
  selector: 'app-modal-withdraw',
  templateUrl: './modal-withdraw.component.html',
  styleUrls: ['./modal-withdraw.component.scss'],
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
export class ModalWithdrawComponent implements OnInit {
  customPopoverOptionsStyle3 = {
    cssClass: 'my-custom-customPopover-select-style-3',
  };

  type_withdraw_arr: any[] = [
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

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
