import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllMemberPage } from './all-member.page';

describe('AllMemberPage', () => {
  let component: AllMemberPage;
  let fixture: ComponentFixture<AllMemberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
