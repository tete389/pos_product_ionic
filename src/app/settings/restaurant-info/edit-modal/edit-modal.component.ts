import { Component, Input } from '@angular/core';
import { ModalController, IonInput, IonButton } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule],
 
})
export class EditModalComponent {
  @Input() field!: string;
  @Input() value!: string;

  maxLength = 100;

  labelMap = {
    name: 'ชื่อร้าน',
    phone: 'เบอร์โทรศัพท์',
    email: 'อีเมล',
    taxId: 'เลขประจำตัวผู้เสียภาษี',
    address: 'ที่อยู่ร้าน',
    generalAddress: 'ที่อยู่ที่ให้บริการ',
    website: 'Link Fanpage or Website'
  };

  placeholderMap: Record<string, string> = {
    phone: 'xxx-xxx-xxxx',
    email: 'example@email.com',
    website: 'Facebook fanpage or Website',
  };
  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  save() {
    this.modalCtrl.dismiss({ value: this.value });
  }
  getPlaceholder(field: string): string {
    return this.placeholderMap[field as keyof typeof this.placeholderMap] || '';
  }
  getLabel(field: string): string {
    return this.labelMap[field as keyof typeof this.labelMap] ?? field;
  }
}
 