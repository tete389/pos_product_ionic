import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-stock-items',
  standalone: true,
  imports: [CommonModule, IonicModule], // ✅ Import IonicModule สำหรับ Ionic Components
  templateUrl: './stock-items.component.html',
  styleUrls: ['./stock-items.component.scss'],
})
export class StockItemsComponent implements OnInit {


  activeButton: string = ''; // เก็บค่าปุ่มที่ถูกคลิก
  items = [
    {
      image: 'assets/images/eggs.png',
      name: 'ไข่ไก่',
      category: 'Meat',
      unit: 'Kg',
      maxLevel: 100,
      reorderPoint: '> 20%',
      orderQuantity: 100,
      location: 'B1',
      supplier: 'Makro',
      price: 250,
    },
    {
      image: 'assets/images/beef.png',
      name: 'สันในวัว',
      category: 'Meat',
      unit: 'Kg',
      maxLevel: 5,
      reorderPoint: '> 20%',
      orderQuantity: 100,
      location: 'B1',
      supplier: 'Makro',
      price: 250,
    },
    {
      image: 'assets/images/s.png',
      name: 'กุ้งสด',
      category: 'ซีฟู้ด',
      unit: 'Kg',
      maxLevel: 5,
      reorderPoint: '> 20%',
      orderQuantity: 100,
      location: 'B1',
      supplier: 'Makro',
      price: 250,
    }
  ];
  constructor() { }




  setActive(buttonName: string) {
    this.activeButton = buttonName;
  }
  ngOnInit() { }

}
