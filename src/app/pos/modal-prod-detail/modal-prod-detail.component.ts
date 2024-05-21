import { Component, Input, OnInit } from '@angular/core';
import {
  IonicSlides,
  IonBackdrop,
  IonContent,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonTextarea,
  IonIcon,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-modal-prod-detail',
  templateUrl: './modal-prod-detail.component.html',
  styleUrls: ['./modal-prod-detail.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonTextarea,
    IonButton,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonItem,
    IonContent,
    IonBackdrop,
    FormsModule,
    CommonModule,
  ],
})
export class ModalProdDetailComponent implements OnInit {
  @Input('prod') prod: any;
  constructor() {}

  ngOnInit() {
    console.log(this.prod);
  }
}
