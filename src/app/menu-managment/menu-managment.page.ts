import { Component, OnInit, ViewChild } from '@angular/core';
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
  IonToggle,
  IonTextarea,
  IonCheckbox,
  IonAccordionGroup,
  IonAccordion,
  IonIcon,
  IonRadioGroup,
  IonRadio
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
    IonToggle,
    IonTextarea,
    IonCheckbox,
    IonAccordionGroup,
    IonAccordion,
    IonIcon,
    IonRadioGroup,
    IonRadio
  ],
})
export class MenuManagmentPage implements OnInit {
  customPopoverOptionsStyle1 = {
    cssClass: 'my-custom-customPopover-select-style-1',
  };
  customPopoverOptionsStyle2 = {
    cssClass: 'my-custom-customPopover-select-style-2',
  };

  customPopoverMultiSelect = {
    cssClass: 'my-custom-customPopover-multiSelect',
  };
  customPopoverMultiSelect2 = {
    cssClass: 'my-custom-customPopover-multiSelect-2',
  };

  arr_options: any = [
    { id: 1, name: 'เลือก Topping', option_detail: [1, 2, 3] },
    { id: 2, name: 'เลือก Size', option_detail: [1, 2] },
    { id: 3, name: 'ระดับความเผ็ด', option_detail: [1, 2, 3, 4, 5] },
  ];

  customPopoverOptions = {};
  cc:any =0;

  select_tab_menu: number = 3;
  searchControl: FormControl;
  search_text = '';
  placho_text = 'ค้นหา';

  ischangeToggle: boolean = false;
  ischangeToggle2: boolean = false;

  sort_by: any = '1';
  screened: string = '1';

  new_product: any = [];
  is_edit: boolean = false;

  @ViewChild('accordionGroup', { static: true })
  accordionGroup!: IonAccordionGroup;
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

  addNewProduct() {
    this.new_product.push(1);
  }

  cancelAddNewProduct() {
    this.new_product.pop();
  }

  // เปิด accordion
  select_accordion(ev: any) {
    console.log(ev);
  }

  accordionGroupChange(ev: any) {
    console.log(ev);

    const selectedValue = ev.detail.value;
    const nativeEl = this.accordionGroup;

    if (selectedValue !== undefined) {
      nativeEl.value = selectedValue;
      // nativeEl.value = undefined;
      console.log('AAA');
    } else {
      // nativeEl.value = 'second';
      console.log('BBB');
    }
  }

  openDetailOption(){
    console.log('AAAAAAA');
    
  }
}
