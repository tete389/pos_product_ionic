import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

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
} from '@ionic/angular/standalone';
import Swiper from 'swiper';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonCard, CommonModule],
})
export class ProductListComponent implements OnInit {
  swiper?: Swiper;
  @ViewChild('swiper') swiperRef?: ElementRef | undefined;

  @ViewChild('swiper2') swiperRef2: ElementRef | undefined;

  swiper2?: Swiper;

  select_group_page: number = 0;
  prods_group_temp: any[] = [];
  open_search: boolean = false;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.prods_group_temp = this.product_group
  }

  selectedTab: number = 0;

  addItem() {}

  swiper2Ready() {
    this.swiper2 = this.swiperRef2?.nativeElement.swiper;
    this.swiper2?.disable();
  }

  swiper2SlideCharge() {
    this.swiper2?.disable();
  }

  public select_group_even(event: any) {
    this.select_group_page = event.detail.value;
    // this.select_group(Number(event.detail.value));
    this.swiper?.slideTo(event.detail.value);
  }

  public openSli() {
    this.open_search = true;
    this.swiper2?.enable();
    this.swiper?.slideTo(0);
    this.swiper?.disable();
    // this.swiper2?.loopCreate();
    // this.swiper2?.startAutoplay();
    this.swiper2?.slideNext();
    // this.swiper2?.autoplay.start();
  }

  public closeSli() {
    this.open_search = false;
    this.swiper2?.enable();
    this.swiper?.enable();
    this.swiper2?.slidePrev();
  }

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  product_group = [
    {
      pg_id: 1,
      pg_name: 'จานเดียว',
    },
    {
      pg_id: 2,
      pg_name: 'จาน2',
    },
    {
      pg_id: 3,
      pg_name: 'ยำ',
    },
    {
      pg_id: 4,
      pg_name: 'ทานเล่น',
    },
    {
      pg_id: 5,
      pg_name: 'ทั้งหมด2',
    },
    {
      pg_id: 6,
      pg_name: 'จานเดียว2',
    },
    {
      pg_id: 7,
      pg_name: 'ยำ2',
    },
    {
      pg_id: 8,
      pg_name: 'ทานเล่น2',
    },
    {
      pg_id: 9,
      pg_name: 'ทานเล่น3',
    },
    {
      pg_id: 10,
      pg_name: 'ทานเล่น4',
    }
  ];
}
