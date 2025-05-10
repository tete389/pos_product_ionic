import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealBillPage } from './meal-bill.page';

describe('MealBillPage', () => {
  let component: MealBillPage;
  let fixture: ComponentFixture<MealBillPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MealBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
