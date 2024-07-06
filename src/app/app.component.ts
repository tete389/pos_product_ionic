import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  IonTitle, IonButton } from '@ionic/angular/standalone';
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
  imports: [IonButton, 
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
    IonRouterOutlet,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Pos', url: '/pos', icon: 'apps' },
    { title: 'Pos-กลับบ้าน', url: '/pos-take-away', icon: 'bag-handle' },
    { title: 'จัดการเมนู', url: '/menu-managment', icon: 'fast-food' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  screen_width: number = 0;

  constructor() {
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
  }

  menuTogle: boolean = false

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen_width = event.target.innerWidth;
  }

  togle(){
    this.menuTogle = !this.menuTogle
  }
}
