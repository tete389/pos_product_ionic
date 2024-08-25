import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButtons,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonToggle,
  IonIcon,
  IonFooter,
  ModalController,
  IonPopover,
  IonDatetime
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-add-new-member',
  templateUrl: './modal-add-new-member.component.html',
  styleUrls: ['./modal-add-new-member.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    IonFooter,
    IonButtons,
    IonButton,
    IonPopover,
    FormsModule,
    IonDatetime
  ]
})

export class ModalAddNewMemberComponent  implements OnInit {
  customPopoverOptionsStyle1 = {
    cssClass: 'my-custom-customPopover-select-style-1',
  };
  birthday:any=''
  birstday_calc:any;
  gender: any = '0';
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  // เลือกวันเกิด
  selectBirthday(event: any) {
    // console.log(event.detail.value);
    if (event.detail.value == undefined || event.detail.value == null) {
      let to_day: any = new Date();
      const formattedDate = this.formatDate(to_day);
      this.birthday = formattedDate;
      // this.formGroup.patchValue({
      //   birthday: formattedDate,
      // });
    } else {
      const formattedDate = this.formatDate(event.detail.value);
      this.birthday = formattedDate;
      // this.formGroup.patchValue({
      //   birthday: formattedDate,
      // });
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // เพิ่ม 1 เพราะเดือนเริ่มจาก 0
    const year = date.getFullYear();

    this.ageCalculate(year,month,day)
    return `${year}-${month}-${day}`;
  }

  save(){
    this.modalController.dismiss({
      formgroup:{
        name:'nnn',
        lastname:12344,
      }
    }, 'save');
  }

  close(){
    this.modalController.dismiss({}, 'close');
  }

  ageCalculate(year:any,month:any,day:any) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let today = new Date();
      // สร้างตัวแปร อ้างอิงไปยัง id
      // let inputDate = new Date(document.getElementById("date-input").value);
      // console.log(inputDate);
  
      // สร้างตัวแปรแบบเปลี่ยนค่าได้ let
      let birthMonths, birthDate, birthYear;
  
      // สร้างตัวแปรเก็บข้อมูลแบบ Object รับ ว/ด/ป ที่กรอกเข้ามา
      let birthDetails = {
          date: day,
          months: month ,
          year: year
      }
      // ว/ด/ป ปัจจุบัน
      let currentYear = today.getFullYear();
      let currentMonth = today.getMonth() + 1;
      let currentDate = today.getDate();
  
      // ถ้าเงื่อนไขเป็นจริง
      if (
          birthDetails.year > currentYear ||     //ถ้าปีที่กรอกเข้ามา มากกว่า ปีในปัจจุบัน หรือ 
          (birthDetails.months > currentMonth && // ( เดือนที่กรอกเข้ามา มากกว่า เดือนในปัจจุบัน และ 
              birthDetails.year == currentYear) || //ปีที่กรอกเข้ามา เท่ากับ ปีในปัจจุบัน ) หรือ       
          (birthDetails.date > currentDate &&    // ( วันที่กรอกเข้ามา มากกว่า วันในปัจจุบัน และ
              birthDetails.months == currentMonth && // เดือนที่กรอกเข้ามา เท่ากับ เดือนในปัจจุบัน และ
              birthDetails.year == currentYear)      // ปีที่กรอกเข้ามา เท่ากับ ปีในปัจจุบัน )
      ) {
          alert("No Born Yet ยังไม่เกิด!!");//ถ้าเงื่อนไขเป็นจริง ส่ง Alert
              // เรียกใช้ functionc + ส่งค่า parameter
             this.displayResult("-");
      }
  
      // ===========================================================================
      //คำนวน อายุ ว/ด/ป
  
      //birthYear = ปีในปัจจุบัน ลบ ปีเกิด
      birthYear = currentYear - birthDetails.year; //Ex = 2022 - 1998 = 24
      if ( //ถ้าเงื่อนไขเป็นจริง
          // ถ้า เดือนในปัจจุบัน มากกว่าหรือเท่ากับ เดือนเกิด
          currentMonth >= birthDetails.months
      ) {
          //birthMonths = เดือนปัจจุบัน ลบ เดือนเกิด
          birthMonths = currentMonth - birthDetails.months; //Ex= 1-2=1 
          console.log(birthMonths);
      }
      else {//ถ้าเงื่อนไขเป็นเท็จ
          birthYear--; // //birthYear = ลบ
          //birthMonths = 12 + เดือนปัจจุบัน ลบ เดือนเกิด 
          birthMonths = 12 + currentMonth - birthDetails.months;  //EX = 12+1 - 2 = 11
  
      }
  
      if (
          //ถ้าวันในปัจจุบัน >= วันเกิด
          currentDate >= birthDetails.date
      ) {
          // birthDate = วันปัจจุบัน - วันเกิด
          birthDate = currentDate - birthDetails.date;
      }
      else {
          birthMonths--;
          let days = months[currentMonth - 2];
          //birthMonths = days  + วันปัจจุบัน ลบ วันเกิด 
          birthDate = days + currentDate - birthDetails.date;
          if (birthMonths < 0) {  //ถ้าเดือนเกิด < 0
              birthMonths = 11; //เดือนเกิดเท่ากับ 11
              birthYear--;
          }
      }
      // console.log(birthYear,birthMonths,birthDate);
      // ===========================================================================
      //แสดงผลการคำนวนบนหน้าจอ
      // เรียกใช้ functionc + ส่งค่า parameter
      this.displayResult(birthYear);
  }
  
  // สร้าง function + สร้างตัวแปร รับค่า value
   displayResult(bYear:any) {
      return this.birstday_calc = `${bYear} ปี`;
  }
  

}
