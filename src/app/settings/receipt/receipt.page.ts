import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonToggle,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonInput,
  IonTextarea,
  IonCheckbox
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonButton,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonInput,
    IonTextarea,
    IonCheckbox,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReceiptPage implements OnInit {
  public formGroup: FormGroup;
  activeInput = signal<string | null>(null);

  customPopoverOptionsStyle1 = {
    cssClass: 'my-custom-customPopover-select-style-1',
  };

  //แก้ไข form ไหม
  isEdited: boolean = true;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      receipt_language: 'th',
      store_logo: '',
      show_logo_on_receipt: true,
      store_name:'',
      // store_name: this.fb.group({
      //   th: [''],
      //   en: [''],
      // }),
      branch_name: '',
      branch_code: '',
      store_address: '', //7
      use_store_address: true, //7.1
      store_phone: '', //8
      show_rounding: true,//9
      show_discount_refund: true,//10
      show_price_before_rounding: true,//11
      show_member_point_earning: true,//12
      show_point_expiry: true,//13
      show_vat_note: true,//14
      receipt_footer_text: '',//15
      show_receipt_footer_text: true,//16
      show_store_promotion_message: true,//17
      show_e_receipt: true,//18
    });
  }

  // ข้อที่	รายละเอียด	ชื่อ Field (Field Name)
  // 1	ภาษาของใบเสร็จ	receipt_language
  // 2	โลโก้	store_logo
  // 3	แสดง LOGO ในใบเสร็จ	show_logo_on_receipt
  // 4	ชื่อร้าน	store_name
  // 5	สาขา (Branch Name)	branch_name
  // 6	รหัสสาขา (Branch Code)	branch_code
  // 7	ที่อยู่ร้าน	store_address
  // 7.1 ใช้ที่อยู่ตามข้อมูลร้าน use_store_address
  // 8	เบอร์โทร	store_phone
  // 9	แสดงการปัดเศษ	show_rounding
  // 10	แสดงรายการคืนส่วนลด	show_discount_refund
  // 11	แสดงราคาก่อนปัด	show_price_before_rounding
  // 12	Member ที่ได้รับคะแนน	show_member_point_earning
  // 13	คะแนนหมดอายุ	show_point_expiry
  // 14	ข้อความ “VAT Included / Excluded”	show_vat_note
  // 15	ข้อความท้ายใบเสร็จ	receipt_footer_text
  // 16	แสดงข้อความท้ายใบเสร็จ	show_receipt_footer_text
  // 17	แสดงข้อความประชาสัมพันธ์ลูกค้าร้าน	show_store_promotion_message
  // 18	แสดงใบเสร็จอิเล็กทรอนิกส์ (E-Receipt)	show_e_receipt

  ngOnInit() {}

  setActiveInput(field: string) {
    console.log('setActiveInput');
    this.activeInput.set(field);
  }

  clearActiveInput() {
    console.log('clearActiveInput');

    this.activeInput.set(null);
  }

  // form Save
  save() {
    console.log(this.formGroup.value);
  }

  //คืนค่าใน form เมื่อแก้ไขแล้วไม่กดบันทึก
  resetForm() {}

  // upload รูป
  fileNameChanged(event: any) {
    // this.imageUploadService.imageUpload(
    //   event.target.files[0].name,
    //   event.target.files[0], 'member_img'
    // ).subscribe((res: any) => {
    //   if (res.type == HttpEventType.Response) {
    //     this.formGroup.patchValue({
    //       logo_url: 'member_img/' + res.body.files[0].name
    //     });
    //     this.originalFormValue = this.formGroup.value;
    //   }
    // }, () => {
    //   this.api.error("มีปัญหาในการอัพโหลดไฟล์ ลองใหม่อีกครั้ง");
    // })
  }
}
