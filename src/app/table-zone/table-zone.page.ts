import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard,IonCol,IonRow,IonContent, IonHeader, IonTitle, IonToolbar , IonGrid,IonButton,IonIcon,IonSelect,IonSelectOption,IonImg ,IonProgressBar,IonInfiniteScroll
  ,IonInfiniteScrollContent,IonList,IonItem,IonButtons,IonMenuButton
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table-zone',
  templateUrl: './table-zone.page.html',
  styleUrls: ['./table-zone.page.scss'],
  standalone: true,
  imports: [NgFor,IonCard,IonCol,IonRow,IonContent,IonGrid, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonButtons,IonMenuButton
    ,IonIcon,IonSelect,IonSelectOption,IonImg,IonProgressBar, IonInfiniteScroll,IonInfiniteScrollContent,IonList,IonItem]
})
export class TableZonePage implements OnInit {
  items = [1, 2, 3, 4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
  selectedCard: any;
  isEditMode = false; // เพิ่มตัวแปรนี้
  zones = [
    { id: 1, name: 'Zone A', count: 20 },
    { id: 2, name: 'Zone B', count: 0 },
  ];

  constructor() { }

  ngOnInit() { }

  onCardClick(cardId: number) {
    this.selectedCard = cardId;
  }

  addZone() {
    const newZoneNumber = this.zones.length + 1;
    const newId = this.zones.length ? Math.max(...this.zones.map(zone => zone.id)) + 1 : 1;
    this.zones.push({ id: newId, name: `Zone ${String.fromCharCode(64 + newZoneNumber)}`, count: 0 });
    console.log(this.zones);
  }

  deleteZone(id: number, event: Event) {
    event.stopPropagation(); // เพื่อไม่ให้ trigger ฟังก์ชัน onCardClick
    this.zones = this.zones.filter(zone => zone.id !== id);
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode; // เปลี่ยนสถานะของ isEditMode
  }
}
