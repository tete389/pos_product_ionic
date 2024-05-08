import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    { title: 'Pos', url: '/pos', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
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

  togle(){
    this.menuTogle = !this.menuTogle
  }
}
