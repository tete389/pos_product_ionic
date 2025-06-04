import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonContent,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardContent,
  IonInput,
  IonList,
  IonItem,
  IonToggle,
  IonTextarea,
  IonCheckbox,
  IonAccordionGroup,
  IonAccordion,
  IonIcon,
  IonRadioGroup,
  IonRadio,
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonLabel,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonCardContent,
    IonInput,
    IonList,
    IonItem,
    IonToggle,
    IonTextarea,
    IonCheckbox,
    IonAccordionGroup,
    IonAccordion,
    IonIcon,
    IonRadioGroup,
    IonRadio,
  ],
})
export class OtherPage implements OnInit {

  ischangeToggle: boolean = false;
  ischangeToggle2: boolean = false;
  constructor() { }
  setting = {
    enableCustomerCount: true,
    changeQROnCheckout: false,
    tableLayout: '4',
    autoUpdateFoodStatus: true,
    mealTime: 120,
    mealTimeWarning: 15,
    enableTimerAlert: true,
    currency: 'THB',
    taxOption: 'inclusive'
  };
  ngOnInit() {
  }
  openprintSystem(event: any) {
    console.log(event.detail.checked);
  }
}
