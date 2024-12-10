import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockProductsPage } from './stock-products.page';

describe('StockProductsPage', () => {
  let component: StockProductsPage;
  let fixture: ComponentFixture<StockProductsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StockProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
