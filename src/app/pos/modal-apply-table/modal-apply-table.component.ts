import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-modal-apply-table',
  templateUrl: './modal-apply-table.component.html',
  styleUrls: ['./modal-apply-table.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalApplyTableComponent  implements OnInit {

  constructor(   private modalCtrl: ModalController ) { }

  ngOnInit() {}
  closed(){
    this.modalCtrl.dismiss()
  }

  async confirm() {
    await this.modalCtrl.dismiss(null, 'confirm');
  }

}
