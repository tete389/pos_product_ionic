import {
  Component,
  OnInit,
  OnDestroy,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
  IonSearchbar,
} from '@ionic/angular/standalone';
import Swiper from 'swiper';
// import { AddBasketComponent } from './add-basket/add-basket.component';

@Component({
  selector: 'app-pos-take-away',
  templateUrl: './pos-take-away.page.html',
  styleUrls: ['./pos-take-away.page.scss'],
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
    IonSearchbar,
  ],
})
export class PosTakeAwayPage implements OnInit {
  swiperModules = [IonicSlides];
  @ViewChild('swiper') swiperRef?: ElementRef | undefined;
  swiper?: Swiper;

  @ViewChild(IonModal) modalMember: IonModal | undefined;

  constructor(private modalCtrl: ModalController) {}

  zone_pos: string[] = ['zone 1', 'zone 2'];
  select_zone: number = 0;

  is_charge_col = 4;
  table_pos: any[] = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'A11',
    'A12',
    'A13',
    'A14',
    'A15',
  ];

  take_away_pos: any[] = [
    '0125',
    '0124',
    '0123',
    '0122',
    '0121',
    '0120',
    '0119',
    '0118',
    '0117',
    
  ];

  ngOnInit() {}

  customPopoverOptionsStyle2 = {
    // cssClass: 'my-custom-customPopover-select-style-2',
  };

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
    this.swiper?.disable();
  }

  swiperSlideCharge() {
    const index = this.swiperRef?.nativeElement.swiper.activeIndex;
    // if (this.select_group_page != index) {
    //   this.select_group_page = index;
    //   this.select_group(Number(index));
    // }
  }

  public charge(col: number) {
    this.is_charge_col = col;
  }

  // public async openModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: AddBasketComponent,
  //     cssClass: 'fullscreen',
  //     mode: 'ios',
  //     // showBackdrop: false
  //   });
  //   await modal.present();
  //   const { data, role } = await modal.onWillDismiss();
  //   if (role === 'confirm') {
  //     // this.message = `Hello, ${data}!`;
  //   }
  // }

  public select_zone_event(event: any) {
    this.swiper?.enable();
    this.select_zone = event.detail.value;
    this.swiper?.slideTo(event.detail.value);
    this.swiper?.disable();
  }

  ////// modal member
  public onWillDismiss(event: any) {}

  cancel() {
    this.modalMember?.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalMember?.dismiss('', 'confirm');
  }
}
