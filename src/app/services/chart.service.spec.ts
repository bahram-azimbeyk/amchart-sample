import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { ChartService } from './chart.service';
import { DataService } from './data.service';
import { ChartModel } from '../models/chart.model';
import { ChartType } from '../models/chart.type';

describe('ChartService', () => {
  let service: ChartService;
  let dataServiceStub: Partial<DataService>;
  let chartModelSubject: BehaviorSubject<ChartModel>;

  beforeEach(() => {
    dataServiceStub = {
      getSimpleData: jasmine.createSpy('getSimpleData').and.returnValue([{ country: 'USA', value: 2025 }]),
      getMultiData: jasmine.createSpy('getMultiData').and.returnValue([{ year: '2019' }])
    };

    TestBed.configureTestingModule({
      providers: [
        ChartService,
        { provide: DataService, useValue: dataServiceStub }
      ]
    });

    service = TestBed.inject(ChartService);
    chartModelSubject = service['chartModel'];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setChartType()', () => {
    it('should set chart type and load chart model', () => {
      spyOn(service, 'loadChartModel');
      service.setChartType('column');
      expect(service.loadChartModel).toHaveBeenCalled();
    });
  });

  describe('loadChartModel()', () => {
    it('should load chart model with simple data', () => {
      service.loadChartModel();
      expect(dataServiceStub.getSimpleData).toHaveBeenCalled();
      expect(chartModelSubject.value.chartType).toBe('column');
      expect(chartModelSubject.value.data[0].country).toBe('USA');
    });
  });

  describe('sortChartData()', () => {
    it('should sort chart data by x-axis in ascending order', () => {
      chartModelSubject.next({
        chartType: 'column',
        data: [{ country: 'Germany', value: 1322 }, { country: 'USA', value: 2025 }]
      });
      service.sortChartData('xAxis', 'asc');
      expect(chartModelSubject.value.data[0].country).toBe('Germany');
      expect(chartModelSubject.value.data[1].country).toBe('USA');
    });

  });
});
