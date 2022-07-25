import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ForecastDay } from 'src/app/models/weather-details.model';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss'],
})
export class ForecastDetailsComponent implements OnChanges {
  @Input() data: ForecastDay;
  lineChartType: ChartType = 'line';
  lineChartData: ChartConfiguration['data'];

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.prepareData();
    }
  }

  hide() {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
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
        },
      ],
      labels: this.data?.hour?.map((hour) => {
        const time = new Date(hour.time);
        return `${time.getHours()}:00`;
      }),
    };
  }
}
