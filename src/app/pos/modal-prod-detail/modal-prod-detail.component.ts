import { Component, OnInit } from '@angular/core';
import { IonicSlides, IonBackdrop, IonContent, IonItem, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-prod-detail',
  templateUrl: './modal-prod-detail.component.html',
  styleUrls: ['./modal-prod-detail.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonItem, IonContent, IonBackdrop],
})
export class ModalProdDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
