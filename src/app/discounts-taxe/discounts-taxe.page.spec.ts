import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscountsTaxePage } from './discounts-taxe.page';

describe('DiscountsTaxePage', () => {
  let component: DiscountsTaxePage;
  let fixture: ComponentFixture<DiscountsTaxePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsTaxePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
