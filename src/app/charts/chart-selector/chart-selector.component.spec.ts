import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChartModel } from 'src/app/models/chart.model';
import { ChartService } from 'src/app/services/chart.service';
import { ChartSelectorComponent } from './chart-selector.component';
import { BehaviorSubject } from 'rxjs';
import { ColumnBarChartComponent } from '../column-bar-chart/column-bar-chart.component';
import { ClusteredBarChartComponent } from '../clustered-bar-chart/clustered-bar-chart.component';
import { StackedBarChartComponent } from '../stacked-bar-chart/stacked-bar-chart.component';

describe('ChartSelectorComponent', () => {
  let component: ChartSelectorComponent;
  let fixture: ComponentFixture<ChartSelectorComponent>;
  let chartServiceStub: Partial<ChartService>;
  let chartModelSubject: BehaviorSubject<ChartModel>;

  const mockChartModel: ChartModel = {
    chartType: 'column',
    data: [{ country: 'USA', value: 2025 }]
  };

  beforeEach(() => {
    chartModelSubject = new BehaviorSubject<ChartModel>(null);
    chartServiceStub = {
      loadChartModel: jasmine.createSpy('loadChartModel'),
      getChartModel: () => chartModelSubject.asObservable(),
      sortChartData: jasmine.createSpy('sortChartData')
    };

    TestBed.configureTestingModule({
      declarations: [ChartSelectorComponent, ColumnBarChartComponent, ClusteredBarChartComponent, StackedBarChartComponent],
      providers: [{ provide: ChartService, useValue: chartServiceStub }]
    });

    fixture = TestBed.createComponent(ChartSelectorComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load chart model and set subscriptions on ngOnInit', () => {
    component.ngOnInit();
    expect(chartServiceStub.loadChartModel).toHaveBeenCalled();
  });

  it('should render chart component based on chartModel.chartType', () => {
    chartModelSubject.next(mockChartModel);
    fixture.detectChanges();

    const columnChart = fixture.debugElement.query(By.css('app-column-bar-chart'));
    expect(columnChart).toBeTruthy();
  });

  it('should call sortChartData when sort buttons are clicked', () => {
    chartModelSubject.next(mockChartModel);
    fixture.detectChanges();

    const sortButton = fixture.debugElement.query(By.css('.btn-success'));
    sortButton.triggerEventHandler('click', null);
    expect(chartServiceStub.sortChartData).toHaveBeenCalled();
  });
});
