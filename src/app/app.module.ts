import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartSelectorComponent } from './charts/chart-selector/chart-selector.component';
import { ColumnBarChartComponent } from './charts/column-bar-chart/column-bar-chart.component';
import { StackedBarChartComponent } from './charts/stacked-bar-chart/stacked-bar-chart.component';
import { ClusteredBarChartComponent } from './charts/clustered-bar-chart/clustered-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartSelectorComponent,
    ColumnBarChartComponent,
    StackedBarChartComponent,
    ClusteredBarChartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
