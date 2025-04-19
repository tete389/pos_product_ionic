import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalAddStockItemComponent } from './modal-add-stock-item/modal-add-stock-item.component';
import {
  ModalController,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-stock-items',
  standalone: true,
  imports: [CommonModule, IonicModule], // ✅ Import IonicModule สำหรับ Ionic Components
  templateUrl: './stock-items.component.html',
  styleUrls: ['./stock-items.component.scss'],
})
export class StockItemsComponent implements OnInit {

  rawMaterials = [
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
    },
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
    },   {
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
    },   {
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
    },   {
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
    },   {
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
    },
  ];

  products = [
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
    },
    // เพิ่มข้อมูลเพิ่มเติมตามต้องการ
  ];
  searchText:string = '';
  activeButton: string = 'วัตถุดิบ';
  filteredItems = [...this.rawMaterials];
  constructor(private modalCtrl: ModalController) { }
  ngOnInit() { 
    this.updateFilterItems();
  }
  setActive(buttonName: string) {
    this.activeButton = buttonName;
    this.updateFilterItems();
  }
  updateFilterItems(){
    if(this.activeButton === 'วัตถุดิบ'){
      this.filteredItems = this.rawMaterials;
    } else if(this.activeButton === 'สินค้า'){
      this.filteredItems = this.products;
    }
    this.applySearchFilter();
  }
  filterItems(event:any){
    this.searchText = event.target.value.toLowerCase();
    this.applySearchFilter();
  }
  applySearchFilter(){
    this.filteredItems  = (this.activeButton === "วัตถุดิบ" ? this.rawMaterials : this.products).filter(item =>
    item.name.toLowerCase().includes(this.searchText) ||
    item.category.toLowerCase().includes(this.searchText) ||
    item.location.toLowerCase().includes(this.searchText) ||
    item.supplier.toLowerCase().includes(this.searchText)
  );
  }

  public async openModalApply() {
  
  
    const modal = await this.modalCtrl.create({
      component: ModalAddStockItemComponent,
      cssClass: 'modal-stockItem-add',
      mode: 'ios',
      componentProps: { }, // Pass combined index
    });
  
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
  
    if (role === 'confirm') {
      console.log('confirm cancle');
    }
  }
}
