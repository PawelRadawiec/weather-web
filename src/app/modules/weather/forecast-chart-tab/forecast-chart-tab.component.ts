import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ForecastDay } from 'src/app/models/weather-details.model';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {
  ForecastCommonTabService,
  TempMode,
} from 'src/app/services/forecast-common-tab.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forecast-chart-tab',
  templateUrl: './forecast-chart-tab.component.html',
  styleUrls: ['./forecast-chart-tab.component.scss'],
})
export class ForecastChartTabComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit
{
  @Input() data: ForecastDay;
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  tempMode: TempMode;
  lineChartType: ChartType = 'line';
  lineChartData: ChartConfiguration['data'];
  subscription = new Subscription();

  constructor(private commonTabService: ForecastCommonTabService) {}

  ngOnInit() {
    this.commonTabService.tempMode$.subscribe((mode) => {
      this.prepareData();
      this.setDatasetHidden(mode);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.prepareData();
      this.setDatasetHidden(this.tempMode);
    }
  }

  ngAfterViewInit() {
    this.setDatasetHidden(this.tempMode);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setDatasetHidden(tempMode: TempMode) {
    this.tempMode = tempMode;
    if (!this.chart) {
      return;
    }
    switch (tempMode) {
      case TempMode.CELSIUS:
        this.chart.hideDataset(0, false);
        this.chart.hideDataset(1, true);
        this.chart.update();
        break;
      case TempMode.FAHRENHEIT:
        this.chart.hideDataset(0, true);
        this.chart.hideDataset(1, false);
        this.chart.update();
        break;
    }
  }

  prepareData() {
    const dayName = new Date(this.data?.date).toLocaleString('en-us', {
      weekday: 'long',
    });
    this.lineChartData = {
      datasets: [
        {
          data: this.data?.hour?.map((hour) => {
            return hour.temp_c;
          }),
          label: `${dayName} (C)`,
          backgroundColor: 'rgba(231, 245, 255, 0.5)',
          borderColor: '#d0ebff',
          pointBackgroundColor: '#d0ebff',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#d0ebff',
          fill: 'origin',
          hidden: this.tempMode === TempMode.CELSIUS,
        },
        {
          data: this.data?.hour?.map((hour) => {
            return hour.temp_f;
          }),
          label: `${dayName} (F)`,
          backgroundColor: 'rgba(116, 143, 252, 0.7)',
          borderColor: '#dbe4ff',
          pointBackgroundColor: '#dbe4ff',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#dbe4ff',
          fill: 'origin',
          hidden: this.tempMode === TempMode.FAHRENHEIT,
        },
      ],
      labels: this.data?.hour?.map((hour) => {
        const time = new Date(hour.time);
        return `${time.getHours()}:00`;
      }),
    };
  }
}
