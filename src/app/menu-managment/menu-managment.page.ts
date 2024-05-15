import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonButtons,IonMenuButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu-managment',
  templateUrl: './menu-managment.page.html',
  styleUrls: ['./menu-managment.page.scss'],
  standalone: true,
  imports: [IonContent,IonButtons,IonMenuButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MenuManagmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
