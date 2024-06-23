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
  selector: 'app-modal-optioned',
  templateUrl: './modal-optioned.component.html',
  styleUrls: ['./modal-optioned.component.scss'],
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
    FormsModule
  ],
})
export class ModalOptionedComponent  implements OnInit {

  tab_active = '0'
checked:boolean = true;
  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

    // เลือกโซน
    select_tab(tab_id: any) {
      // this.tab_active = tab_id;
      // setTimeout(() => {
      //   this.changeDetector.detectChanges();
      // }, 200);
    }

  close() {
    this.modalController.dismiss({ close: false });
  }

}
