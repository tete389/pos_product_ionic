import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons, // <--- Add this
  IonButton,  // <--- Add this
  IonLabel,   // <--- Add this
  IonToggle,  // <--- Add this
  IonCard,    // <--- Add this
  IonCardContent, // <--- Add this
  IonGrid,    // <--- Add this
  IonRow,     // <--- Add this
  IonCol,     // <--- Add this
  IonInput,   // <--- Add this
  IonIcon     // <--- Add this (for the edit icon)
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // <--- Add this for icons
import { createOutline } from 'ionicons/icons'; // <--- Add this for the specific icon

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
   standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonLabel,
    IonToggle,
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonIcon // Make sure IonIcon is imported
  ]
})
export class EmployeePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
