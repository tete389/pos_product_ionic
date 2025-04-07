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
  IonTextarea,
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
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-upload-files',
  templateUrl: './modal-upload-files.component.html',
  styleUrls: ['./modal-upload-files.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonFooter,
    IonTextarea,
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
export class ModalUploadFilesComponent  implements OnInit {

  constructor(private modalCtrl: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  save() {
    this.modalCtrl.dismiss(null, 'save');
  }
}
