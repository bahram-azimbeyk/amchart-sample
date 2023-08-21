import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ChartModel } from '../models/chart.model';
import { ChartType } from '../models/chart.type';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private chartType: BehaviorSubject<ChartType> = new BehaviorSubject<ChartType>('column');
  private chartModel: BehaviorSubject<ChartModel> = new BehaviorSubject<ChartModel>(null);


  constructor(private dataService: DataService) { }

  setChartType(chartType: ChartType): void {
    this.chartType.next(chartType);
    this.loadChartModel();
  }

  loadChartModel(): void {
    const chartType = this.chartType.getValue();
    const chartModel: ChartModel = {
      chartType: chartType,
      data: chartType === 'column' ? this.dataService.getSimpleData() : this.dataService.getMultiData()
    };

    this.chartModel.next(chartModel);
  }

  getChartModel(): Observable<ChartModel> {
    return this.chartModel.asObservable();
  }

  sortChartData(sortBy: 'xAxis' | 'yAxis', order: 'asc' | 'desc'): void {
    const chartModel = this.chartModel.getValue();
    const sortKey = Object.keys(chartModel.data[0])[sortBy === 'xAxis' ? 0 : 1];

    chartModel.data = chartModel.data.sort((a, b) => {
      if (order === 'asc') {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      } else {
        return a[sortKey] < b[sortKey] ? 1 : -1;
      }
    });

    this.chartModel.next(chartModel);
  }
}
