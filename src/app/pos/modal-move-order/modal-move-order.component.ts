import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
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
  IonCheckbox,
  IonToggle,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';
import Swiper from 'swiper';

@Component({
  selector: 'app-modal-move-order',
  templateUrl: './modal-move-order.component.html',
  styleUrls: ['./modal-move-order.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    IonButtons,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonCard,
    IonCheckbox,
    IonCardContent,
    IonToggle,
    IonSegment,
    IonSegmentButton,
    IonIcon,
    CommonModule,
    FormsModule,
  ],
})
export class ModalMoveOrderComponent  implements OnInit {

  select_zone_page:number = 0;
  zone_page_arr: string[] = ['zone 1', 'zone 2'];

  constructor(
    private modalController: ModalController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {}


   select_tab_event(event: any) {
    console.log(event.detail.value);
    
    // this.swiper?.enable();
    // this.swiper?.slideTo(this.select_member_page);
    // this.swiper?.disable();
  }

  close() {
    this.modalController.dismiss({ close: false });
  }
}
