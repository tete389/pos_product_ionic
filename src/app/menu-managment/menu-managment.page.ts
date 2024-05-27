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
  IonCardContent,
  IonInput,
  IonList,
  IonItem,
  IonToggle
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
    IonCardContent,
    IonInput,
    IonList,
    IonItem,
    IonToggle
  ],
})
export class MenuManagmentPage implements OnInit {
  customPopoverOptionsStyle1 = {
    cssClass: 'my-custom-customPopover-select-style-1',
  };
  customPopoverOptionsStyle2 = {
    cssClass: 'my-custom-customPopover-select-style-2',
  };

  customPopoverOptions={

  }

  select_tab_menu: number = 0;
  searchControl: FormControl;
  search_text = '';
  placho_text = 'ค้นหา';

  ischangeToggle: boolean = false;
  ischangeToggle2: boolean = false;

 sort_by:any ="1";
 screened:string = '1';

 new_product:any=[];
is_edit:boolean= false;
  constructor() {
    this.searchControl = new FormControl();
  }

  ngOnInit() {}

  onCancel() {}

  onSearchInput(text: string) {}

  search_enter(val: any) {
    console.log(typeof val);
  }

  openprintSystem(event: any) {
    console.log(event.detail.checked);
  }

  addNewProduct(){
    this.new_product.push(1)
  }

  cancelAddNewProduct(){
    this.new_product.pop();
  }

  
}
