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
  selector: 'app-customer-type',
  templateUrl: './customer-type.page.html',
  styleUrls: ['./customer-type.page.scss'],
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
export class CustomerTypePage implements OnInit {

  constructor() {
    // Add the desired icon to the Ionicons library
    addIcons({ createOutline });
  }
  customerTypes = [
    {
      courseName: 'ลูกค้าทั่วไป',
      adultPrice: 0,
      childPrice: 0,
      visible: true,
      editMode: false,
      original: {},
    },
    {
      courseName: 'Standard Buffet',
      adultPrice: 599,
      childPrice: 399,
      visible: true,
      editMode: false,
      original: {},
    },
    {
      courseName: 'Gold Buffet',
      adultPrice: 759,
      childPrice: 529,
      visible: true,
      editMode: false,
      original: {},
    },
    {
      courseName: 'Premium Buffet',
      adultPrice: 959,
      childPrice: 729,
      visible: true,
      editMode: false,
      original: {},
    },
  ];

  toggleStatus(item: any) {
    // สามารถส่ง API toggle ได้ที่นี่
  }

  enterEditMode(item: any) {
    item.original = { ...item };
    item.editMode = true;
  }

  cancelEdit(item: any) {
    Object.assign(item, item.original);
    item.editMode = false;
  }

  saveEdit(item: any) {
    item.editMode = false;
    // ส่งข้อมูลใหม่กลับ API ได้ที่นี่
  }
  ngOnInit() {
  }

}