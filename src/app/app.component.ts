import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
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
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Pos', url: '/pos', icon: 'apps' },
    { title: 'Pos-กลับบ้าน', url: '/pos-take-away', icon: 'bag-handle' },
    { title: 'จัดการเมนู', url: '/menu-managment', icon: 'fast-food' },
    { title: 'สมาชิก', url: '/all-member', icon: 'people' },
    { title: 'โต๊ะและโซน', url: '/table-zone', icon: 'paper-plane' },
    { title: 'เมนูขายดี', url: '/best-sale-menu', icon: 'bar-chart' },
    { title: 'ส่วนลดและภาษี', url: '/discounts-taxe', icon: 'bar-chart' },
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

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  screen_width: number = 0;

  @ViewChild('accordionGroup', { static: true })
  accordionGroup!: IonAccordionGroup;

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
    setTimeout(() => {
      this.open_menu_toggle_stock();
    }, 500);
  }

  menuTogle: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen_width = event.target.innerWidth;
  }

  togle() {
    this.menuTogle = !this.menuTogle;
  }

  open_menu_toggle_stock() {
    console.log('open_menu_toggle_stock');
    this.menuCtrl.open('main-menu');
    setTimeout(() => {
      this.toggleAccordion();
    }, 500);
  }

  path_stock_select: string = '/stock-levels';
  select_stock_path(url: string) {
    this.path_stock_select = url;
    const basePath = '/stock-products'; // path หลัก
    this.router.navigate([basePath + this.path_stock_select]); // รวม path หลักกับ URL ที่เลือก
    // this.menuCtrl.close('main-menu');
  }

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    nativeEl.value = 'stock-val';
  };
}
