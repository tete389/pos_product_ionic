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
  zones: Array<{ id: number, name: string, count: number, tables: Array<{ id: number }> }> = [
    { id: 1, name: 'Zone A', count: 20, tables: Array(20).fill(null).map((_, index) => ({ id: index + 1 })) },
    { id: 2, name: 'Zone B', count: 0, tables: [] }
  ];

  selectedCard: number | null = null;
  isEditMode = false;
  isEditing = false;
  isShowCount = false;
  totalTables = 20;

  constructor() { }

  ngOnInit() {

    if (this.zones.length > 0) {
      this.selectedCard = this.zones[0].id;
    }
  }

  get selectedZone() {
    return this.zones.find(zone => zone.id === this.selectedCard);
  }

  onCardClick(cardId: number) {
    this.selectedCard = cardId;
  }

  addZone() {
    const newZoneNumber = this.zones.length + 1;
    const newId = this.zones.length ? Math.max(...this.zones.map(zone => zone.id)) + 1 : 1;
    this.zones.push({ id: newId, name: `Zone ${String.fromCharCode(64 + newZoneNumber)}`, count: 0, tables: [] });

    setTimeout(() => {
      const element = document.querySelector(`.detail-zone1:nth-last-child(1)`);
      if (element) {
        element.classList.add('fade-in');
        setTimeout(() => {
          element.classList.remove('fade-in');
        }, 500); 
      }
    }, 0);
  }

  deleteZone(id: number, event: Event) {
    event.stopPropagation(); 
    this.zones = this.zones.filter(zone => zone.id !== id);
  }

  increment() {
    const selectedZone = this.selectedZone;
    if (selectedZone && this.getTotalTableCount() < this.totalTables) {
      selectedZone.count++;
      selectedZone.tables.push({ id: selectedZone.tables.length + 1 });
    }
  }

  decrement() {
    const selectedZone = this.selectedZone;
    if (selectedZone && selectedZone.count > 0) {
      selectedZone.count--;
      selectedZone.tables.pop();
    }
  }

  getTotalTableCount(): number {
    return this.zones.reduce((acc, zone) => acc + zone.count, 0);
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  toggleEdit() {
    this.isEditing = true;
    this.isShowCount = true;
  }

  saveChanges() {
    this.isShowCount = false;
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
    this.isShowCount = false;
  }
}




