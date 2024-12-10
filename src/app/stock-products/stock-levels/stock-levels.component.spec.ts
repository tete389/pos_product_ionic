import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StockLevelsComponent } from './stock-levels.component';

describe('StockLevelsComponent', () => {
  let component: StockLevelsComponent;
  let fixture: ComponentFixture<StockLevelsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StockLevelsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
