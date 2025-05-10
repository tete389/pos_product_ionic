import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerTypePage } from './customer-type.page';

describe('CustomerTypePage', () => {
  let component: CustomerTypePage;
  let fixture: ComponentFixture<CustomerTypePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
