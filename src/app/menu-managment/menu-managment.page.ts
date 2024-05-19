import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonContent,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu-managment',
  templateUrl: './menu-managment.page.html',
  styleUrls: ['./menu-managment.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonLabel,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonCardContent
  ],
})
export class MenuManagmentPage implements OnInit {
  customPopoverOptions = {
    cssClass: 'my-custom-customPopover-printer',
  };

  select_tab_menu: number = 0;
  searchControl: FormControl;
  search_text = '';
  placho_text = 'ค้นหา';

  constructor() {
    this.searchControl = new FormControl();
  }

  ngOnInit() {}

  onCancel() {}

  onSearchInput(text: string) {}

  search_enter(val: any) {
    console.log(typeof val);
  }
}
