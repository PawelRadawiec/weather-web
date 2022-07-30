import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ForecastDay } from 'src/app/models/weather-details.model';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

export enum TabOptions {
  CHART = 'CHART',
  DETAILS = 'DETAILS',
}

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss'],
})
export class ForecastDetailsComponent implements OnInit {
  @Input() data: ForecastDay;

  option: TabOptions;
  options = TabOptions;

  constructor() {}

  ngOnInit() {
    this.option = this.options.CHART;
  }

  toogleTab(option: TabOptions) {
    this.option = option;
  }
  
}
