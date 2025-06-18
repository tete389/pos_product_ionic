import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OtherPage implements OnInit {

  // toggle
  toggleOpenTable = true;
  toggleChangeQR = true;
  toggleUpdateFood = true;
  toggleVat = true;
  toggleTimeCount = true;

  // modal Table Layout
  showTableModal = false;
  selectedColumn = 4;

  column4 = Array.from({ length: 16 }, (_, i) => i + 1);
  column5 = Array.from({ length: 16 }, (_, i) => i + 1);

  constructor() {}

  ngOnInit() {}

  openTableLayoutModal() {
    this.showTableModal = true;
  }

  closeTableModal() {
    this.showTableModal = false;
  }

  selectColumn(column: number) {
    this.selectedColumn = column;
  }

  applyTableLayout() {
    console.log('Selected column:', this.selectedColumn);
    this.closeTableModal();
  }

}
