import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
interface CategoryName {
  TH: string;
  EN: string;
}
interface NewProduct {
  nameTH: string;
  nameEN: string;
  description: string;
  // ถ้ามีฟิลด์อื่น ๆ ก็เพิ่มได้
}
interface MenuCategory {
  id: number;
  name: CategoryName;
  inStock?: boolean;
  visible?: boolean;
  description?: string;  // เพิ่ม optional description
}
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
    HttpClientModule,
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
new_product: NewProduct[] = [];
  select_tab_menu: number = 1;
  searchControl: FormControl;
  search_text = '';
  placho_text = 'ค้นหา';
  categories: MenuCategory[] = [];  // เปลี่ยน type เป็น MenuCategory[]
  is_edit: boolean[] = [];          // เก็บสถานะ edit ทีละรายการ

  ischangeToggle: boolean = false;
  ischangeToggle2: boolean = false;

  sort_by: any = '1';
  screened: string = '1';

  // new_product: any = [];
  // is_edit: boolean = false;

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
    public alertController: AlertController,
      private http: HttpClient,
  ) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.openModalDetailOption() 
    // }, 500);
     this.loadMenuCategories();
  }

  onCancel() {}

  onSearchInput(text: string) {}

  search_enter(val: any) {
    console.log(typeof val);
  }
  loadMenuCategories() {
    this.http.get<MenuCategory[]>('http://localhost:8080/menu_categories').subscribe({
      next: (data) => {
        // กำหนดค่าเริ่มต้น toggle ถ้า backend ไม่มีข้อมูลมา
        this.categories = data.map(cat => ({
          ...cat,
          inStock: true,   // สมมติเริ่มต้นมีสินค้า
          visible: true,   // สมมติเริ่มต้นแสดง
          description: '',
        }));
        // กำหนด is_edit เป็น array false ทั้งหมด
        this.is_edit = new Array(this.categories.length).fill(false);

        console.log('หมวดหมู่ที่โหลดมา:', this.categories);
      },
      error: (err) => {
        console.error('โหลดหมวดหมู่ล้มเหลว:', err);
      },
    });
  }

toggleEdit(index: number) {
  const before = this.is_edit[index];
  this.is_edit[index] = !before;

  if (before === true && this.is_edit[index] === false) {
    // นี่คือการกด "บันทึก" เพราะสถานะเปลี่ยนจากแก้ไข (true) เป็นไม่แก้ไข (false)
    console.log(`บันทึกข้อมูลรายการที่ ${index} แล้ว`);
    // เรียกฟังก์ชันบันทึกข้อมูลลง backend ที่นี่ได้เลย
    this.saveItem(index);
  } else if (before === false && this.is_edit[index] === true) {
    // นี่คือการเข้าสู่โหมดแก้ไข
    console.log(`เข้าสู่โหมดแก้ไขรายการที่ ${index}`);
  }
}

saveItem(index: number) {
  const item = this.categories[index];
  const url = `http://localhost:8080/menu_categories/${item.id}`;

  // สร้าง payload สำหรับส่งไป backend
  const payload = {
    id: item.id,
    name: item.name,
    inStock: item.inStock ?? true, // กำหนดค่า default ถ้าไม่มี
    visible: item.visible ?? true,
    description: item.description ?? ''
  };

  this.http.put(url, payload).subscribe({
    next: (res) => {
      this.is_edit[index] = false;
    },
    error: (err) => {
      console.error(`บันทึกข้อมูลรายการที่ ${index} ล้มเหลว`, err);
    }
  });
}


  // ฟังก์ชันอื่นๆ ของคุณยังคงเหมือนเดิม


  openprintSystem(event: any) {
    console.log(event.detail.checked);
  }

addNewProduct() {
  this.new_product.push({ nameTH: '', nameEN: '', description: '' });
}

  // cancelAddNewProduct() {
  //   this.new_product.pop();
  // }
  cancelAddNewProduct(index: number) {
  this.new_product.splice(index, 1);
}
saveNewProduct(index: number) {
  const product = this.new_product[index];

  // เตรียมข้อมูลตามโครงสร้าง backend ต้องการ
  const payload = {
    name: {
      TH: product.nameTH,
      EN: product.nameEN
    },
    description: product.description
  };

  this.http.post('http://localhost:8080/menu_categories', payload).subscribe({
    next: (res: any) => {
      console.log('บันทึกสำเร็จ', res);

      // ✅ เพิ่มข้อมูลใหม่เข้าไปใน categories (สมมุติว่า backend ส่งกลับ id และ name)
      this.categories.push({
        id: res.id,
        name: res.name,
        description: res.description || '',
        inStock: true,
        visible: true
      });

      // ลบจาก new_product
      this.new_product.splice(index, 1);
    },
    error: (err) => {
      console.error('บันทึกล้มเหลว', err);
    }
  });
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
