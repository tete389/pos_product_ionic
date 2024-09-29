import { Component, Input, OnInit } from '@angular/core';
import {
  IonicSlides,
  IonBackdrop,
  IonContent,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonTextarea,
  IonIcon,
  ModalController,
  AlertController,
  LoadingController,
  IonCheckbox,
  IonList,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-modal-prod-detail',
  templateUrl: './modal-prod-detail.component.html',
  styleUrls: ['./modal-prod-detail.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonCheckbox,
    IonIcon,
    IonTextarea,
    IonButton,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonItem,
    IonContent,
    IonBackdrop,
    FormsModule,
    CommonModule,
  ],
})
export class ModalProdDetailComponent implements OnInit {
  @Input('prod') prod: any;
  constructor(
    private alertCtr: AlertController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    console.log(this.prod);
    this.check_seleced_detail()
  }

  public cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  public confirm() {
    return this.modalCtrl.dismiss('', 'confirm');
  }

  public selected_choice(i_detail: number, i_choice: number) {
    let uniqueElements = new Set();
    let option = this.prod.options[i_detail];
    for (let check_set of option.selected_array) {
      uniqueElements.add(check_set);
    }
    for (let i = 0; i < option.choice.length; i++) {
      option.choice[i].selected = false;
    }
    ///////////////////  if min == max ///////////////////
    if (
      option.choice_min - 0 == option.choice_max - 0 &&
      option.choice_min - 0 > 0
    ) {
      if (!uniqueElements.has(i_choice)) {
        if (option.selected_array.length >= option.choice_max) {
          option.selected_array.shift();
        }
        option.selected_array.push(i_choice);
      }
      for (let index_select of option.selected_array) {
        option.choice[index_select].selected = true;
      }
    } else {
      ///////////////////  if min != max ///////////////////
      if (!uniqueElements.has(i_choice)) {
        if (option.selected_array.length >= option.choice_max) {
          option.selected_array.shift();
        }
        option.selected_array.push(i_choice);
      }
      if (uniqueElements.has(i_choice)) {
        if (option.selected_array.length > option.choice_min) {
          option.selected_array = option.selected_array.filter(
            (e: number) => e != i_choice
          );
        }
      }
      for (let index_select of option.selected_array) {
        option.choice[index_select].selected = true;
      }
    }

    ///////////////////  check  unselected  ///////////////////
    if (this.index_options_unselected.length > 0) {
      let check_set = -1;
      let index_check = 0;
      for (let ind of this.index_options_unselected) {
        if (
          this.prod.options[ind]?.selected_array?.length ==
            this.prod.options[ind]?.choice_min &&
          (this.index_options_unselected[index_check] ||
            this.index_options_unselected[index_check] == 0)
        ) {
          check_set = index_check;
        }
        index_check++;
      }
      if (check_set > -1) {
        delete this.index_options_unselected[check_set];
      }
      if (this.index_options_unselected.filter(() => true).length == 0) {
        this.check_can_save = true;
        this.index_options_unselected = [];
      }
    }
  }

  check_can_save: boolean = false;
  index_options_unselected: number[] = [];
  public check_seleced_detail() {
    // ตรวจสอบว่ามีข้อมูลใน this.prod และ this.prod.options หรือไม่
    if (!this.prod || !this.prod.options || !Array.isArray(this.prod.options)) {
        console.error('Product data or options are not available');
        return; // หยุดการทำงานหากข้อมูลไม่ถูกต้อง
    }

    let count_check = 0;
    let index_option = 0;
    this.index_options_unselected = []; // รีเซ็ตค่าเพื่อใช้งานใหม่

    for (let option of this.prod.options) {
        option.selected_array = []; // กำหนดค่า array เพื่อเก็บตัวเลือกที่ถูกเลือก
        if (option.choice_min > 0) {
            let check_choice = 0;
            let index_choice = 0;
            for (let choice of option.choice) {
                if (choice.default) {
                    choice.selected = true; // ทำเครื่องหมายตัวเลือกที่ถูกเลือก
                    check_choice += 1;
                    option.selected_array.push(index_choice); // เพิ่ม index ไปยัง selected_array
                } else {
                    choice.selected = false; // หากไม่ใช่ให้ปิดการเลือก
                }
                index_choice++;
            }

            // ตรวจสอบว่ามีการเลือกตัวเลือกครบตามจำนวนที่กำหนดหรือไม่
            if (option.choice_min === check_choice) {
                count_check += 1;
            } else {
                this.index_options_unselected.push(index_option); // เก็บ index ของ option ที่ยังไม่ถูกเลือก
            }
        } else {
            count_check += 1; // หากไม่มีการเลือกขั้นต่ำ ก็ถือว่าถูกต้อง
            let index_sub = 0;
            for (let choice of option.choice) {
                if (choice.default) {
                    option.selected_array.push(index_sub); // เพิ่ม index ไปยัง selected_array
                }
                index_sub++;
            }
        }
        index_option++;
    }

    // เช็คว่าทุก option ถูกเลือกครบถ้วนหรือไม่
    if (count_check === this.prod.options.length) {
        this.check_can_save = true; // สามารถบันทึกได้
    } else {
        this.check_can_save = false; // ไม่สามารถบันทึกได้
    }
}

}
