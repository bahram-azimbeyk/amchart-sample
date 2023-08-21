import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartModel } from 'src/app/models/chart.model';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-chart-selector',
  templateUrl: './chart-selector.component.html',
  styleUrls: ['./chart-selector.component.scss']
})
export class ChartSelectorComponent implements OnInit, OnDestroy {

  chartModel: ChartModel;

  subscriptions: Subscription[] = [];

  constructor(private chartService: ChartService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.chartService.loadChartModel();
    this.setSubscriptions();
  }

  setSubscriptions(): void {
    this.subscriptions.push(
      this.chartService.getChartModel().subscribe((chartModel: ChartModel) => {
        this.chartModel = null;
        this.changeDetectorRef.detectChanges();
        this.chartModel = chartModel;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  sortChartData(sortBy: 'xAxis' | 'yAxis', order: 'asc' | 'desc'): void {
    this.chartService.sortChartData(sortBy, order);
  }
}
