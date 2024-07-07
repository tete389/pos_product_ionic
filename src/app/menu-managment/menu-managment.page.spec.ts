import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuManagmentPage } from './menu-managment.page';

describe('MenuManagmentPage', () => {
  let component: MenuManagmentPage;
  let fixture: ComponentFixture<MenuManagmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuManagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
