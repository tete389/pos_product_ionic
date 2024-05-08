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
  IonIcon,
} from '@ionic/angular/standalone';
import { AddBasketComponent } from './add-basket/add-basket.component';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.page.html',
  styleUrls: ['./pos.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
  ],
})
export class PosPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  public async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddBasketComponent,
      cssClass: 'fullscreen',
      mode: 'ios',
      // showBackdrop: false
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
}
