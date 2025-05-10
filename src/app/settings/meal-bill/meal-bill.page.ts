import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-meal-bill',
  templateUrl: './meal-bill.page.html',
  styleUrls: ['./meal-bill.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MealBillPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
