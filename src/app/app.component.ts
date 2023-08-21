import { Component } from '@angular/core';
import { ChartType } from './models/chart.type';
import { ChartService } from './services/chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private chartService: ChartService) { }

  chartTypes: { name: string; value: ChartType }[] = [
    { name: 'Regular Bar Chart', value: 'column' },
    { name: 'Clustered Bar Chart', value: 'clustered' },
    { name: '100% Stacked Bar Chart', value: 'stacked' }
  ]

  selectedChartType: ChartType = 'column';

  onSelect(chartType: ChartType): void {
    if (this.selectedChartType !== chartType) {
      this.selectedChartType = chartType;
      this.chartService.setChartType(chartType);
    }
  }
}
