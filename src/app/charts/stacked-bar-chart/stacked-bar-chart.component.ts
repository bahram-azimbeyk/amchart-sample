import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChartModel } from 'src/app/models/chart.model';

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackedBarChartComponent implements OnInit {

  @Input() chartModel: ChartModel;

  ngOnInit(): void {
    this.chartInitConfig();
  }

  chartInitConfig(): void {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);


    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));

    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));

    let xRenderer = am5xy.AxisRendererX.new(root, {});
    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
      location: 1
    })

    xAxis.data.setAll(this.chartModel.data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      max: 100,
      numberFormat: "#'%'",
      strictMinMax: true,
      calculateTotals: true,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));


    let legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    }));


    function makeSeries(name, fieldName, self) {
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        valueYShow: "valueYTotalPercent",
        categoryXField: "year"
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueYTotalPercent.formatNumber('#.#')}%",
        tooltipY: am5.percent(10)
      });
      series.data.setAll(self.chartModel.data);

      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: "{valueYTotalPercent.formatNumber('#.#')}%",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
          })
        });
      });

      legend.data.push(series);
    }

    makeSeries("Europe", "europe", this);
    makeSeries("North America", "namerica", this);
    makeSeries("Asia", "asia", this);
    makeSeries("Latin America", "lamerica", this);
    makeSeries("Middle East", "meast", this);
    makeSeries("Africa", "africa", this);

    chart.appear(1000, 100);
  }
}
