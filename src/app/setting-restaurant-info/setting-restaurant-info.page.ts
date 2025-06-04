import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard,IonCol,IonRow,IonContent, IonHeader, IonTitle, IonToolbar , IonGrid,IonButton,IonIcon,IonSelect,IonSelectOption,IonImg ,IonProgressBar,IonInfiniteScroll
  ,IonInfiniteScrollContent,IonList,IonItem,IonButtons,IonMenuButton,IonInput,ModalController,
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { EditModalComponent } from '../settings/restaurant-info/edit-modal/edit-modal.component';
@Component({
  selector: 'app-setting-restaurant-info',
  templateUrl: './setting-restaurant-info.page.html',
  styleUrls: ['./setting-restaurant-info.page.scss'],
  standalone: true,
  imports: [NgFor,IonCard,IonCol,IonRow,IonContent,IonGrid, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonButtons,IonMenuButton
    ,IonIcon,IonSelect,IonSelectOption,IonImg,IonProgressBar, IonInfiniteScroll,IonInfiniteScrollContent,IonList,IonItem,IonInput]
})
export class SettingRestaurantInfoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  email = 'Macdonal@gmail.com';
  restaurantInfo:any = {
    name: 'Macdonal shabu buffet',
    phone: '098 *** 9734',
    email: 'Macdonal@gmail.com',
    taxId: '1234567890123',
    address: '21 ซอยสามเสนใน แขวง สามเสนใน เขตพญาไท กรุงเทพมหานคร 10400',
    generalAddress: 'บริษัท ดับเบิ้ล ออนดี จำกัด 2525 อาคารซอฟต์แวร์พาร์ค ชั้นที่ 2 ตึกที่ 2 ห้อง 2/1101-2/1107 ถนนแจ้งวัฒนะ ตำบลคลองเกลือ อำเภอปากเกร็ด จังหวัดนนทบุรี 10110',
    website: 'https://www.instagram.com/justinbieber/'
  };
  
  ngOnInit() {
  }
  async openEditModal(field: string, value: string) {
    const modal = await this.modalCtrl.create({
      component: EditModalComponent,
      cssClass: 'edit-setting-res',
      componentProps: { field, value },
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
    if (data?.value) {
      this.restaurantInfo[field] = data.value;
    }
  }
  
}
