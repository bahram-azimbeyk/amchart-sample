import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSelectorComponent } from './chart-selector.component';

describe('ChartSelectorComponent', () => {
  let component: ChartSelectorComponent;
  let fixture: ComponentFixture<ChartSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartSelectorComponent]
    });
    fixture = TestBed.createComponent(ChartSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
