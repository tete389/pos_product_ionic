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
import { ModalSelectFoodGroupComponent } from './modal-select-food-group/modal-select-food-group.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonCard, CommonModule],
})
export class ProductListComponent implements OnInit {
  @ViewChild('swiper') swiperRef?: ElementRef | undefined;

  @ViewChild('swiper2') swiperRef2: ElementRef | undefined;

  swiper2?: Swiper; //กลุ่มอาหาร
  swiper?: Swiper; //กลุ่มรายการอาหาร

  select_group_page: number = 0;
  prods_group: any[] = [];
  prods_group_temp: any[] = [];
  open_search: boolean = false;
  basket: any = [];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.prods_group_temp = this.product_group;
    this.prods_group = this.product_group;

    // setTimeout(() => {
    //   // 2 = ไม่มี option
    //   // 3 = มี option
    //   this.openModalFoodDetail(2);
    // }, 1000);
  }

  selectedTab: number = 0;

  addItem() {}

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  // ทำงานเมื่อ swiper2 พร้อมทำงาน
  swiper2Ready() {
    console.log('swiperreachbeginning = swiper2 พร้อมทำงาน');
    this.swiper2 = this.swiperRef2?.nativeElement.swiper;
    this.swiper2?.disable();
  }

  swiperSlideCharge() {
    const index = this.swiperRef?.nativeElement.swiper.activeIndex;
    if (this.select_group_page != index) {
      this.select_group_page = index;
      // this.select_group(Number(index));
    }
  }

  swiper2SlideCharge() {
    this.swiper2?.disable();
    console.log('swiperslidechange');
  }

  public select_group_even(event: any) {
    this.select_group_page = event.detail.value;
    // this.select_group(Number(event.detail.value));
    this.swiper?.slideTo(event.detail.value);
  }

  // เปิด slide box ค้นหา
  public openSearch() {
    console.log('เปิด slide ค้นหา');
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
    this.open_search = true;
    this.swiper2?.enable();
    this.swiper?.slideTo(1);
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

  public select_group_left(page: number) {
    page > 0 ? (this.select_group_page -= 1) : '';
    // this.select_group(this.select_group_page);
    this.swiper?.slidePrev();
  }
  public select_group_right(page: number) {
    page < this.prods_group.length ? (this.select_group_page += 1) : '';
    // this.select_group(this.select_group_page);
    this.swiper?.slideNext();
  }

  public async add_basket_group_select(p: any) {
    // if (p?.detail?.length > 0) {
    // await this.openModalDetail(p);
    // }
    // const findBasket = this.basket.find(
    //   (e: { price: number; p_id: number; count: number }) => {
    //     if (e.p_id == p.p_id) {
    //       e.count += 1;
    //       this.price_all = this.price_all + e.price;
    //     }
    //     return e.p_id == p.p_id;
    //   }
    // );
    // if (!findBasket || findBasket.length == 0) {
    //   p.count = 1;
    //   this.price_all = this.price_all + p.price;
    //   this.basket.push(p);
    // }
  }

  //เปิด modal เลือกกลุ่มอาหาร
  async openModalSelectFoodGroup() {
    const modal = await this.modalCtrl.create({
      cssClass: 'css-modal-select-foodGroup',
      component: ModalSelectFoodGroupComponent,
      // backdropDismiss:true,
      componentProps: {
        select_group_page: this.select_group_page, //กลุ่มอาหารที่เลือกอยู่
        product_group: JSON.stringify(this.product_group), //กลุ่มอาหารทั้งหมด
      },
    });
    await modal.present();
    const event: any = await modal.onDidDismiss();
    const date = event.data;
    // const from: CalendarResult = date.from;
    // const to: CalendarResult = date.to;

    console.log(event);

    console.log(date);

    if (event.role == 'save') {
      console.log(event);

      // this.dateFrom = date.from
      // this.dateTo = date.to
      // this.textDate2 = this.api.dateTothai(this.dateFrom, this.dateTo, 'range')
      // this.loadPerson();
    }
    // console.log(date, from, to);
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
    },
  ];

  select_food(index: number) {
    switch (index) {
      case 2:
      case 3:
        this.openModalFoodDetail(index);
        break;
      default:
        break;
    }
  }

  //เปิด modal รายละเอียด + option อาหาร
  async openModalFoodDetail(index:number) {
    const modal = await this.modalCtrl.create({
      component: ProductDetailComponent,
      cssClass: 'css-modal-select-food-detail',
      mode:'ios',
      // backdropDismiss:true,
      componentProps: {
        index:index
      //   select_group_page: this.select_group_page, //กลุ่มอาหารที่เลือกอยู่
      //   product_group: JSON.stringify(this.product_group), //กลุ่มอาหารทั้งหมด
      },
    });
    await modal.present();
    const event: any = await modal.onDidDismiss();
    const date = event.data;
    // const from: CalendarResult = date.from;
    // const to: CalendarResult = date.to;

    console.log(event);

    console.log(date);

    if (event.role == 'save') {
      console.log(event);

      // this.dateFrom = date.from
      // this.dateTo = date.to
      // this.textDate2 = this.api.dateTothai(this.dateFrom, this.dateTo, 'range')
      // this.loadPerson();
    }
    // console.log(date, from, to);
  }
}
