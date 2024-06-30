import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BestSaleMenuPage } from './best-sale-menu.page';

describe('BestSaleMenuPage', () => {
  let component: BestSaleMenuPage;
  let fixture: ComponentFixture<BestSaleMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSaleMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
