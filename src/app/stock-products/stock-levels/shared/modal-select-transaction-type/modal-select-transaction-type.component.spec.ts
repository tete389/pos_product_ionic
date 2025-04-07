import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSelectTransactionTypeComponent } from './modal-select-transaction-type.component';

describe('ModalSelectTransactionTypeComponent', () => {
  let component: ModalSelectTransactionTypeComponent;
  let fixture: ComponentFixture<ModalSelectTransactionTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSelectTransactionTypeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSelectTransactionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
