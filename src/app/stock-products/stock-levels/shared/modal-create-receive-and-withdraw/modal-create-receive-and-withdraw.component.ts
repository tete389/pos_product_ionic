import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  ModalController,
  IonButton,
  AlertController,
  LoadingController,
  IonItem,
  IonIcon,
  IonSegmentButton,
  IonSegment,
  IonLabel,
  IonBadge,
  IonCard,
  IonCardContent,
  IonList,
  IonFooter,
  IonNavLink,
  IonThumbnail,
  IonicSlides,
  IonModal,
  IonGrid,
  IonCol,
  IonRow,
  IonPopover,
  IonInput,
  IonSelect,
  IonSelectOption,
  NavParams
} from '@ionic/angular/standalone';
import { ModalAddNoteComponent } from '../modal-add-note/modal-add-note.component';
import { ModalUploadFilesComponent } from '../modal-upload-files/modal-upload-files.component';
@Component({
  selector: 'app-modal-create-receive-and-withdraw',
  templateUrl: './modal-create-receive-and-withdraw.component.html',
  styleUrls: ['./modal-create-receive-and-withdraw.component.scss'],
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
    IonFooter,
    // IonProgressBar,
    IonSegment,
    IonIcon,
    IonSegmentButton,
    // IonSelect,
    IonModal,
    IonButtons,
    IonButton,
    IonInput,
    IonSelect,
    IonSelectOption,
    // IonSelectOption,
    CommonModule,
    FormsModule,
  ],
})
export class ModalCreateReceiveAndWithdrawComponent  implements OnInit {


  /*
   **  ประเภทการแสดง select
   * 'receive'  = รับเข้า
   * 'withdraw' = เบิกออก
   */
   type_select: string = '';

  constructor(private modalCtrl: ModalController,
    private alertController: AlertController,
    private navParams: NavParams
  ) {
    this.type_select = navParams.get('type_select');
  }

  ngOnInit() {
    console.log(this.type_select);
    
  }

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  save() {
 

    switch (this.type_select) {
      case 'receive':
        this.presentAlertsendCashierSuccess('นำเข้าสำเร็จ')
        break;
      case 'withdraw':
        this.presentAlertsendCashierSuccess('เบิกออกสำเร็จ')
        break;
    }
  }

  async presentAlertsendCashierSuccess(text_sub: string) {
    const alert = await this.alertController.create({
      cssClass: 'app-alert-receive-succes',
      mode: 'md',
      message: `<img src="assets/image/icon-success.png" > <br> <span>${text_sub}</span>`,
      //
    });
    await alert.present();
    setTimeout(() => {
      alert.dismiss().then(() => {
            this.modalCtrl.dismiss(null, 'save');
       });
    }, 2000);
  }


  // modal add_note
  async add_note() {
    const modal = await this.modalCtrl.create({
      component: ModalAddNoteComponent,
      cssClass: 'my-custom-modal-add-note',
      mode: 'md',
      // showBackdrop: false
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'save') {
      console.log(data.items);
    }
  }

  // modal upload_file
  async upload_file() {
    const modal = await this.modalCtrl.create({
      component: ModalUploadFilesComponent,
      cssClass: 'my-custom-modal-upload-file',
      mode: 'md',
      // showBackdrop: false
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'save') {
      console.log(data.items);
    }
  }

  

}
