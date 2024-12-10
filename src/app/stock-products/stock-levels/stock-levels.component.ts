import { Component, ElementRef, OnInit, ViewChild,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  ModalController
} from '@ionic/angular/standalone';


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
export class StockLevelsComponent  implements OnInit {

  customPopoverOptionsStyle1 = {
    cssClass: 'my-custom-customPopover-select-style-1',
  };

  sort_by: any = '1';
  select_by: any = '1';
  select_period_number: number = 2;

  constructor() { }

  ngOnInit() {}

  select_period(number_tab: number) {
    this.select_period_number = number_tab;
  }

}
