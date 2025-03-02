import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalWithdrawComponent } from './modal-withdraw.component';

describe('ModalWithdrawComponent', () => {
  let component: ModalWithdrawComponent;
  let fixture: ComponentFixture<ModalWithdrawComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalWithdrawComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
