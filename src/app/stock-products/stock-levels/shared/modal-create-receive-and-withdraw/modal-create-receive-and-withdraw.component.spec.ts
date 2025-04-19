import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCreateReceiveAndWithdrawComponent } from './modal-create-receive-and-withdraw.component';

describe('ModalCreateReceiveAndWithdrawComponent', () => {
  let component: ModalCreateReceiveAndWithdrawComponent;
  let fixture: ComponentFixture<ModalCreateReceiveAndWithdrawComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateReceiveAndWithdrawComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCreateReceiveAndWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
