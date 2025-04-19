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
    private alertController: AlertController,
  ) { }

  ngOnInit() {}

  // alert confirm ลบรายการที่ Draft
  async openConfirmDeleteDraft() {
    const alert = await this.alertController.create({
      cssClass: 'app-alert-button-confirm-red-2',
      mode: 'md',
      header: 'Delete',
      message: `ลบรายการ Draft?`,
      backdropDismiss: false,
      buttons: [
        {
          text: `ปิดออก`,
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah: any) => {},
        },
        {
          text: `ยืนยัน`,
          cssClass: 'success',
          handler: () => {
            console.log('ยืนยัน');
            this.close();
          },
        },
      ],
    });
    await alert.present();
  }
 

  close() {
    this.modalController.dismiss(null, 'cancel');
  }

}
