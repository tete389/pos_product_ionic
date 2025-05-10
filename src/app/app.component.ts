import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonAccordionGroup,
  IonAccordion,
  IonTitle,
  IonButton,
  MenuController,
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
// import { addIcons } from 'ionicons';
// import {
//   mailOutline,
//   mailSharp,
//   paperPlaneOutline,
//   paperPlaneSharp,
//   heartOutline,
//   heartSharp,
//   archiveOutline,
//   archiveSharp,
//   trashOutline,
//   trashSharp,
//   warningOutline,
//   warningSharp,
//   bookmarkOutline,
//   bookmarkSharp,
//   addOutline,
//   removeOutline,
// } from 'ionicons/icons';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonAccordionGroup,
    IonAccordion,
    IonRouterOutlet,
  ],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Pos', url: '/pos', icon: 'apps' },
    { title: 'Pos-กลับบ้าน', url: '/pos-take-away', icon: 'bag-handle' },
    { title: 'จัดการเมนู', url: '/menu-managment', icon: 'fast-food' },
    { title: 'สมาชิก', url: '/all-member', icon: 'people' },
    { title: 'โต๊ะและโซน', url: '/table-zone', icon: 'paper-plane' },
    { title: 'เมนูขายดี', url: '/best-sale-menu', icon: 'bar-chart' },
    { title: 'ส่วนลดและภาษี', url: '/discounts-taxe', icon: 'bar-chart' },
    { title: 'ข้อมูลร้านอาหาร', url: '/setting-restaurant-info', icon: 'bar-chart' },
    // { title: 'สต็อคสินค้า', url: '/stock-products', icon: 'cube' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
  ];
  // <ion-icon name="cube-outline"></ion-icon>

  public arr_stock_list = [
    { title: 'Stock Levels', url: '/stock-levels' },
    { title: 'items', url: '/stock-items' },
    { title: 'History', url: '/stock-history' },
    { title: 'Report', url: '/stock-report' },
  ];

  public arr_settings_list = [  
        { title: 'setting ', url: '/settings', icon: 'settings' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  screen_width: number = 0;

  @ViewChild('accordionGroup', { static: true })
  accordionGroup!: IonAccordionGroup;

  private routerSubscription!: Subscription;
  constructor(private menuCtrl: MenuController, private router: Router) {
    this.screen_width = window.screen.width;
    // addIcons({
    //   mailOutline,
    //   mailSharp,
    //   paperPlaneOutline,
    //   paperPlaneSharp,
    //   heartOutline,
    //   heartSharp,
    //   archiveOutline,
    //   archiveSharp,
    //   trashOutline,
    //   trashSharp,
    //   warningOutline,
    //   warningSharp,
    //   bookmarkOutline,
    //   bookmarkSharp,
    //   addOutline,
    //   removeOutline,
    // });

    // setTimeout(() => {
    //   this.open_menu_toggle_stock();
    // }, 500);
  }

  mainPath: string = '';

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd)) // กรองเฉพาะ NavigationEnd
      .subscribe(() => {
        this.extractMainPath();
      });
  }
  // ป้องกัน Memory Leak โดยการ unsubscribe เมื่อคอมโพเนนต์ถูกทำลาย:
  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  extractMainPath() {
    // ดึง path จาก URL
    const fullPath = this.router.url;
    // ตัด path แยกด้วย '/' และดึงเฉพาะ path หลัก
    this.mainPath = fullPath.split('/')[1];
    console.log(this.mainPath); // แสดง /stock-products
    if (this.mainPath !== 'stock-products') {
      this.toggleAccordion(false);
    }
  }

  menuTogle: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen_width = event.target.innerWidth;
  }

  togle() {
    this.menuTogle = !this.menuTogle;
  }

  change_accordion(event: any) {
    const val = event.detail.value;
    if (!val) {
      setTimeout(() => {
        this.menuCtrl.close('main-menu');
      }, 250);
    }
  }

  open_menu_toggle_stock() {
    // console.log(this.router.url);
    console.log('open_menu_toggle_stock');
    this.menuCtrl.open('main-menu');
    setTimeout(() => {
      this.toggleAccordion(true);
    }, 250);
  }

  path_stock_select: string = '/stock-levels';
  select_stock_path(url: string) {
    this.path_stock_select = url;
    const basePath = '/stock-products'; // path หลัก
    this.router.navigate([basePath + this.path_stock_select]); // รวม path หลักกับ URL ที่เลือก
    this.menuCtrl.close('main-menu');
  }

  toggleAccordion = (bool: boolean) => {
    const nativeEl = this.accordionGroup;
    bool ? (nativeEl.value = 'stock-val') : (nativeEl.value = undefined);
  };
}
