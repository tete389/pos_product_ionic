import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.page.html',
  styleUrls: ['./restaurant-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RestaurantInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
