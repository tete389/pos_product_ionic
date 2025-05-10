import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantInfoPage } from './restaurant-info.page';

describe('RestaurantInfoPage', () => {
  let component: RestaurantInfoPage;
  let fixture: ComponentFixture<RestaurantInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
