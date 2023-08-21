import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnBarChartComponent } from './column-bar-chart.component';

describe('ColumnBarChartComponent', () => {
  let component: ColumnBarChartComponent;
  let fixture: ComponentFixture<ColumnBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnBarChartComponent]
    });
    fixture = TestBed.createComponent(ColumnBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
