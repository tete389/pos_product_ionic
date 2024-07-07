import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableZonePage } from './table-zone.page';

describe('TableZonePage', () => {
  let component: TableZonePage;
  let fixture: ComponentFixture<TableZonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
