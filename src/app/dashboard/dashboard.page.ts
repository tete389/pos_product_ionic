import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard,IonCol,IonRow,IonContent, IonHeader, IonTitle, IonToolbar , IonGrid} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [NgFor,IonCard,IonCol,IonRow,IonContent,IonGrid, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {
  items = [1, 2, 3, 4,6,7,8,9,10,11,12];
  constructor() { }

  ngOnInit() {
  }

}
