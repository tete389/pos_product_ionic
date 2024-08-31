import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
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
  IonRow,
  IonCol,
  IonSegmentButton,
  IonSegment,
  IonLabel,
  IonicSlides,
  IonBadge,
  IonSelect,
  IonPopover,
  IonModal,
  IonSearchbar
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-type',
  templateUrl: './modal-type.component.html',
  styleUrls: ['./modal-type.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonLabel,
    IonCol,
    IonRow,
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
    IonSegmentButton,
    IonSegment,
    IonLabel,
    IonBadge,
    IonSelect,
    IonPopover,
    IonModal,
    IonSearchbar
  ],
})
export class ModalTypeComponent  implements OnInit {
  activeCardIndex: any = null;
  selectedCardIndex: any = null;
  selectedCardValue: string | undefined;
  counts: { [key: string]: number } = {
    adult: 0,
    kid: 0
  };
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onCardClick(index: number): void {
    this.activeCardIndex = index;
    this.selectedCardIndex = index;

    // Update the selectedCardValue based on the index
    switch (index) {
      case 0:
        this.selectedCardValue = 'Alacart';
        break;
      case 1:
        this.selectedCardValue = '299';
        break;
      case 2:
        this.selectedCardValue = '499';
        break;
      case 3:
        this.selectedCardValue = '699';
        break;
      default:
        this.selectedCardValue = '';
        break;
    }
  }
  increase(cardType: string) {
    if (this.counts[cardType] < 10) {
      this.counts[cardType]++;
    }
  }

  decrease(cardType: string) {
    if (this.counts[cardType] > 0) {
      this.counts[cardType]--;
    }
  }
  goBack() {
    this.selectedCardIndex = null;
  
    // Reset counts to initial values
    this.counts = {
      adult: 0,
      kid: 0
    };
    
  }
  async closeModal() {
    await this.modalCtrl.dismiss();
  }
  async confirmSelection() {
    await this.modalCtrl.dismiss(null, 'confirm');
  }
}
