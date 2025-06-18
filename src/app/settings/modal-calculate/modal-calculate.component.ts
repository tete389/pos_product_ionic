import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit,ViewChild,AfterViewInit,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperContainer } from 'swiper/element/bundle';
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
// import { ModalSelectMemberComponent } from '../modal-select-member/modal-select-member.component';
@Component({
  selector: 'app-modal-calculate',
  templateUrl: './modal-calculate.component.html',
  styleUrls: ['./modal-calculate.component.scss'],
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
export class ModalCalculateComponent implements OnInit, AfterViewInit {
  @Input() totalAmount: number = 0;
  @Input() selectedColumn: number = 4;

  @ViewChild('swiperRef', { static: true }) swiperEl!: ElementRef;

  cashAmount: number = 0;
  changeAmount: number = 0;
  memberData: any;
  selectedPaymentMethod: string = '';
  seats = Array.from({ length: 16 }, (_, i) => `A${i + 1}`);

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log('Initial selectedColumn:', this.selectedColumn);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const swiper = this.swiperEl?.nativeElement?.swiper;
      if (swiper) {
        swiper.allowTouchMove = false;
        this.slideTo(this.selectedColumn);
      }
    });
  }

  slideTo(index: number) {
    const swiper = this.swiperEl?.nativeElement?.swiper;
    if (swiper) {
      swiper.slideTo(index - 4);
    }
  }

  selectColumn(value: any) {
    this.selectedColumn = +value;
    this.slideTo(this.selectedColumn);
  }

  getRows(cols: number): string[][] {
    const rows: string[][] = [];
    for (let i = 0; i < this.seats.length; i += cols) {
      rows.push(this.seats.slice(i, i + cols));
    }
    return rows;
  }

  onCancel() {
    console.log('ยกเลิกการเลือก');
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onApply() {
    console.log('ยืนยันการเลือก', this.selectedColumn);
    this.modalCtrl.dismiss({ selectedColumn: this.selectedColumn }, 'confirm');
  }
}