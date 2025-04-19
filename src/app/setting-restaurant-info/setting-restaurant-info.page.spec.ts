import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingRestaurantInfoPage } from './setting-restaurant-info.page';

describe('SettingRestaurantInfoPage', () => {
  let component: SettingRestaurantInfoPage;
  let fixture: ComponentFixture<SettingRestaurantInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingRestaurantInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
