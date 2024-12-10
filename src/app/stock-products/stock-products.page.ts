import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.page.html',
  styleUrls: ['./stock-products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    RouterModule // เพิ่ม RouterModule ตรงนี้
  ]
})
export class StockProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
