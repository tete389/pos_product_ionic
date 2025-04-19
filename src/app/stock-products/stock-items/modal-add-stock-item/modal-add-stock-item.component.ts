import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  ModalController,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-add-stock-item',
    standalone: true,
    imports: [CommonModule, IonicModule], 
  templateUrl: './modal-add-stock-item.component.html',
  styleUrls: ['./modal-add-stock-item.component.scss'],
})
export class ModalAddStockItemComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  closed() {
    this.modalCtrl.dismiss();
  }
}
