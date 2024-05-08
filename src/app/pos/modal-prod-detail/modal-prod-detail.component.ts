import { Component, OnInit } from '@angular/core';
import { IonicSlides, IonBackdrop } from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal-prod-detail',
  templateUrl: './modal-prod-detail.component.html',
  styleUrls: ['./modal-prod-detail.component.scss'],
  standalone: true,
  imports: [IonBackdrop],
})
export class ModalProdDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
