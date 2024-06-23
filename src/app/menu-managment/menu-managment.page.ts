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
  IonRadio,
  ModalController,
  AlertController,
} from '@ionic/angular/standalone';
import { ModalOptionedComponent } from './modal-optioned/modal-optioned.component';

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
    IonRadio,
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
    { id: 4, name: 'เลือก Topping', option_detail: [1, 2, 3] },
    { id: 5, name: 'เลือก Size', option_detail: [1, 2] },
    { id: 6, name: 'ระดับความเผ็ด', option_detail: [1, 2, 3, 4, 5] },
    { id: 7, name: 'เลือก Topping', option_detail: [1, 2, 3] },
    { id: 8, name: 'เลือก Size', option_detail: [1, 2] },
    { id: 9, name: 'ระดับความเผ็ด', option_detail: [1, 2, 3, 4, 5] },
    { id: 10, name: 'เลือก Topping', option_detail: [1, 2, 3] },
    { id: 11, name: 'เลือก Size', option_detail: [1, 2] },
    { id: 12, name: 'ระดับความเผ็ด', option_detail: [1, 2, 3, 4, 5] },
    { id: 13, name: 'เลือก Topping', option_detail: [1, 2, 3] },
    { id: 14, name: 'เลือก Size', option_detail: [1, 2] },
    { id: 15, name: 'ระดับความเผ็ด', option_detail: [1, 2, 3, 4, 5] },
  ];

  customPopoverOptions = {};

  select_multi_options: string = '1';

  select_tab_menu: number = 1;
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

  arr_new_option: any = [
    {
      name: '',
      price: 0,
      is_showed: true,
    },
  ];

  constructor(
    public modalController: ModalController,
    public alertController: AlertController
  ) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.openModalDetailOption() 
    // }, 500);
  }

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
  select_accordion(event: any) {
    console.log('event', event);
    // this.accordionGroup.requestAccordionToggle('',false)
    // this.accordionGroup.value =undefined
    // event.stopPropagation();
    //  const selectedValue = event.detail.value;

    // console.log(event.detail.value);
    // console.log(this.accordionGroup);

    // const nativeEl = this.accordionGroup;
    // console.log(nativeEl.value);

    // if (nativeEl.value === 'second') {
    //   nativeEl.value = undefined;
    // } else {
    //   nativeEl.value = 'second';
    // }
  }

  accordionGroupChange(event: Event) {
    console.log('ev', event);
    event.stopPropagation();
    // const selectedValue = ev.detail.value;

    // const nativeEl = this.accordionGroup;
    // console.log(nativeEl.value);

    // if (nativeEl.value === 'second') {
    //   nativeEl.value = undefined;
    // } else {
    //   nativeEl.value = 'second';
    // }
  }

  openDetailOption() {
    console.log('AAAAAAA');
  }

  addNewOption() {
    this.arr_new_option.push({
      name: '',
      price: 0,
      is_showed: true,
    });
  }

  toggleAccordion(event: Event) {
    console.log('event', event);

    event.stopPropagation();
    this.openModalDetailOption();
    // const accordion:any = (event.target as HTMLElement).closest('ion-accordion');
    // if (accordion) {
    //   accordion.toggle();
    // }
  }

  // modal แสดง รายการอาหารที่ใช้ option นี้
  async openModalDetailOption() {
    console.log('banana');

    const modal = await this.modalController.create({
      component: ModalOptionedComponent,
      cssClass: 'css-modal-optioned',
      componentProps: { data: 'banana' },
    });
    modal.onDidDismiss().then((result: any) => {
      if (result.role == undefined) {
        if (result.data.flag) {
        }
      }
    });
    return await modal.present();
  }

  // alert confirm ลบตัวเลือก option
  async openConfirmDeleteoption() {
    const alert = await this.alertController.create({
      cssClass: 'app-alert-button-confirm-red',
      mode: 'md',
      message: `ลบตัวเลือก '' ระดับความหวาน ''`,
      backdropDismiss: false,
      buttons: [
        {
          text: `ปิดออก`,
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah: any) => {},
        },
        {
          text: `ยืนยัน`,
          cssClass: 'success',
          handler: () => {
            console.log('ยืนยัน');
          },
        },
      ],
    });
    await alert.present();
  }
}
