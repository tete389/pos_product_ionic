import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  ModalController,
  NavParams,
  IonPopover,
  IonDatetime,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-select-food-group',
  templateUrl: './modal-select-food-group.component.html',
  styleUrls: ['./modal-select-food-group.component.scss'],
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
    CommonModule,
    FormsModule,
  ],
})
export class ModalSelectFoodGroupComponent implements OnInit {
  //กลุ่มอาหารที่เลือกอยู่
  select_group_page: number = 0;
  //กลุ่มอาหารทั้งหมด
  product_group: any = [];

  constructor(
    public modalController: ModalController,
    public navParams: NavParams
  ) {
    this.select_group_page = navParams.get('select_group_page');
  }

  ngOnInit() {
    this.product_group = JSON.parse(this.navParams.get('product_group'));
    this.product_group.unshift({
      pg_id: 0,
      pg_name: 'ทั้งหมด',
    });
    console.log(this.product_group);
  }

  save_select_group(index:number){
    this.modalController.dismiss(
      {
        index:index
      },
      'save'
    );
  }



  close() {
    this.modalController.dismiss({}, 'close');
  }
}
