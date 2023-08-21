import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChartType } from './models/chart.type';
import { ChartService } from './services/chart.service';
import { By } from '@angular/platform-browser';
import { ChartSelectorComponent } from './charts/chart-selector/chart-selector.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let chartServiceSpy: jasmine.SpyObj<ChartService>;

  const chartTypes: { name: string; value: ChartType }[] = [
    { name: 'Regular Bar Chart', value: 'column' },
    { name: 'Clustered Bar Chart', value: 'clustered' },
    { name: '100% Stacked Bar Chart', value: 'stacked' }
  ];

  beforeEach(() => {
    chartServiceSpy = jasmine.createSpyObj('ChartService', ['setChartType']);

    TestBed.configureTestingModule({
      declarations: [AppComponent, ChartSelectorComponent],
      providers: [{ provide: ChartService, useValue: chartServiceSpy }]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set selected chart type and call chartService.setChartType()', () => {
    const selectedChartType: ChartType = 'stacked';

    component.onSelect(selectedChartType);

    expect(component.selectedChartType).toBe(selectedChartType);
    expect(chartServiceSpy.setChartType).toHaveBeenCalledWith(selectedChartType);
  });
});
