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
} from '@ionic/angular/standalone';
// import { OverlayEventDetail } from '@ionic/core/components';
import { ModalProdDetailComponent } from '../modal-prod-detail/modal-prod-detail.component';
import Swiper from 'swiper';
// import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-add-basket',
  templateUrl: './add-basket.component.html',
  styleUrls: ['./add-basket.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonNavLink,
    IonFooter,
    IonList,
    IonCardContent,
    IonCard,
    IonBadge,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonIcon,
    IonItem,
    IonContent,
    IonToolbar,
    IonButton,
    IonThumbnail,
    FormsModule,
    CommonModule,
    IonGrid,
    IonCol,
    IonRow,
  ],
})
export class AddBasketComponent implements OnInit, OnDestroy {
  swiperModules = [IonicSlides];
  @ViewChild('swiper')
  swiperRef?: ElementRef | undefined;
  swiper?: Swiper;

  @ViewChild('swiper2')
  swiperRef2: ElementRef | undefined;
  swiper2?: Swiper;
  // VerSlideOpts2?: SwiperOptions = {
  //   autoplay: {
  //     delay: 200,
  //   },
  // };

  @ViewChild(IonModal)
  modal?: IonModal;

  url: string = '../../../assets/product.json';
  prods_group: any[] = [];
  prods_group_temp: any[] = [];
  prods: any = [];
  prods_temp: any = [];
  basket: any = [];
  value: any;
  select_group_page: number = 0;
  price_all: number = 0;
  timeout: any;

  newValue: any = 0;
  // slidesPerView_search: number = 1.1
  open_search: boolean = false;
  open_add_detail: boolean = false;
  constructor(
    // private alertCtr: AlertController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
    // this.swiper?.destroy();
  }

  ngOnInit() {
    console.log('pos-select');
    fetch(this.url)
      .then((res) => res.json())
      .then(async (json) => {
        this.prods_group_temp = JSON.parse(JSON.stringify(json.product_group));
        this.prods_group = json.product_group;
        this.prods_group.unshift({
          pg_id: 0,
          pg_name: 'ทั้งหมด',
        });
        this.prods = json.product;
        this.prods_temp = JSON.parse(JSON.stringify(json.product));
        // this.select_group(0);
        await this.set_group_select();
      });
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiper2Ready() {
    this.swiper2 = this.swiperRef2?.nativeElement.swiper;
    this.swiper2?.disable();
  }

  swiper2SlideCharge() {
    this.swiper2?.disable();
  }

  swiperSlideCharge() {
    const index = this.swiperRef?.nativeElement.swiper.activeIndex;
    if (this.select_group_page != index) {
      this.select_group_page = index;
      this.select_group(Number(index));
    }
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

  public async set_group_select() {
    this.prods_group.forEach((e1: any) => {
      const prods: any[] = [];
      this.prods.forEach((e2: any) => {
        if (e2.pg_id == e1.pg_id || e1.pg_id == 0) {
          prods.push(e2);
        }
      });
      e1.prods = prods;
    });
  }

  public async add_basket_group_select(p: any) {
    // if (p?.detail?.length > 0) {
    await this.openModalDetail(p);
    // }
    const findBasket = this.basket.find(
      (e: { price: number; p_id: number; count: number }) => {
        if (e.p_id == p.p_id) {
          e.count += 1;
          this.price_all = this.price_all + e.price;
        }
        return e.p_id == p.p_id;
      }
    );

    if (!findBasket || findBasket.length == 0) {
      p.count = 1;
      this.price_all = this.price_all + p.price;
      this.basket.push(p);
    }
  }

  public select_group(pg_id: number) {
    this.prods = this.prods_temp.filter((e: { pg_id: number }) => {
      return e.pg_id == pg_id || pg_id == 0;
    });
  }

  public select_group_even(event: any) {
    this.select_group_page = event.detail.value;
    this.select_group(Number(event.detail.value));
    this.swiper?.slideTo(event.detail.value);
  }

  public select_group_left(page: number) {
    page > 0 ? (this.select_group_page -= 1) : '';
    this.select_group(this.select_group_page);
    this.swiper?.slidePrev();
  }

  public select_group_right(page: number) {
    page < this.prods_group.length ? (this.select_group_page += 1) : '';
    this.select_group(this.select_group_page);
    this.swiper?.slideNext();
  }

  public async add_basket(p: any) {
    if (p?.detail?.length > 0) {
      await this.openModalDetail(p);
    }
    const findBasket = this.basket.find(
      (e: { price: number; p_id: number; count: number }) => {
        if (e.p_id == p.p_id) {
          e.count += 1;
          this.price_all = this.price_all + e.price;
        }
        return e.p_id == p.p_id;
      }
    );

    if (!findBasket || findBasket.length == 0) {
      p.count = 1;
      this.price_all = this.price_all + p.price;
      this.basket.push(JSON.parse(JSON.stringify(p)));
    }
  }

  add(P_id: number) {
    this.basket.find((e: { price: number; p_id: number; count: number }) => {
      if (e.p_id == P_id) {
        e.count += 1;
        this.price_all = this.price_all + e.price;
      }
      return e.p_id == P_id;
    });
  }

  remove(P_id: number, index: number) {
    const findBasket = this.basket.find(
      (e: { price: number; p_id: number; count: number }) => {
        if (e.p_id == P_id) {
          e.count -= 1;
          this.price_all = this.price_all - e.price;
        }
        return e.p_id == P_id;
      }
    );
    if (findBasket && findBasket.count <= 0) {
      this.basket = this.basket.filter((e: any, i: number) => i != index);
    }
  }

  async goBack() {
    const alert = await this.loadingCtrl.create({});
    alert.present();

    this.timeout = setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  public cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  public confirm() {
    return this.modalCtrl.dismiss('', 'confirm');
  }

  // public cancelAddDetail() {
  //   return this.modalCtrl.dismiss(this.newValue, 'cancel');
  // }

  // public confirmAddDetail() {
  //   return this.modalCtrl.dismiss('', 'confirm');
  // }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     // this.message = `Hello, ${ev.detail.data}!`;
  //   }
  // }

  public async openModalDetail(prod: any) {
    this.open_add_detail = true;
    const modal = await this.modalCtrl.create({
      component: ModalProdDetailComponent,
      mode: 'ios',
      cssClass: 'nodalscreen',
      componentProps: { prod: prod },
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    }

    this.open_add_detail = false;
  }

  public async AlertLoadding() {
    const alert = await this.loadingCtrl.create({
      // message: 'Dismissing after 3 seconds...',
      // duration: 3000,
    });
  }
}
