import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalCalculateComponent } from 'src/app/settings/modal-calculate/modal-calculate.component';
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
selectedColumn: number | null = null;
  ischangeToggle: boolean = false;
  ischangeToggle2: boolean = false;
  constructor(private modalCtrl: ModalController) { }
  setting = {
    enableCustomerCount: true,
    changeQROnCheckout: false,
    tableLayout: '4',
    autoUpdateFoodStatus: true,
    mealTime: 120 ,
    mealTimeWarning: 15,
    enableTimerAlert: true,
    currency: 'THB',
    taxOption: 'inclusive'
  };
  ngOnInit() {
    this.selectedColumn = 4;
  }
  openprintSystem(event: any) {
    console.log(event.detail.checked);
  }
public async openModalCalculate() {
  const modal = await this.modalCtrl.create({
    component: ModalCalculateComponent,
    cssClass: 'modal-pos-columns',
    mode: 'ios',
    componentProps: { 
      selectedColumn: this.selectedColumn  // ส่ง selectedColumn ไป
    }
  });

  await modal.present();

  const { data, role } = await modal.onWillDismiss();

  if (role === 'confirm') {
    console.log('เลือก column:', data.selectedColumn);
    this.selectedColumn = data.selectedColumn;
  } else if (role === 'cancel') {
    console.log('ปิด modal โดยไม่เลือก');
  }
}
}