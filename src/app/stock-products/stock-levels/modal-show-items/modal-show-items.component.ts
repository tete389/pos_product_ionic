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
  IonSearchbar,
  IonProgressBar,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonToggle,
  IonRadioGroup,
  IonRadio,
  IonIcon,
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-show-items',
  templateUrl: './modal-show-items.component.html',
  styleUrls: ['./modal-show-items.component.scss'],
  standalone:true,
  imports: [
    IonContent,
    IonButtons,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonLabel,
    IonCard,
    IonProgressBar,
    IonCardContent,
    IonCheckbox,
    IonToggle,
    IonIcon,
    IonRadioGroup,
    IonRadio,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ModalShowItemsComponent  implements OnInit {

  searchControl: FormControl;
  search_text = '';
  placho_text = 'ค้นหา';

  // ค้นหาสินค้าตามหมวดหมู่
  search_by_category:string = '3';


  constructor(
    private modalController: ModalController,
  ) {
    this.searchControl = new FormControl();
   }

  ngOnInit() {}

  close() {
    this.modalController.dismiss(null, 'cancel');
  }

  onSearchInput(text: string) {}

  onCancel() {}

  search_enter(val: any) {
    console.log(typeof val);
  }

}
