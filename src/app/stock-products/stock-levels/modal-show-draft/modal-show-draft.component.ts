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
  IonCard,
  IonCardContent,
  IonToggle,
  IonIcon,
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-show-draft',
  templateUrl: './modal-show-draft.component.html',
  styleUrls: ['./modal-show-draft.component.scss'],
  standalone:true,
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
export class ModalShowDraftComponent  implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}


 

  close() {
    this.modalController.dismiss(null, 'cancel');
  }

}
