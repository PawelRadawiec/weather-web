import { Component, Input, OnInit } from '@angular/core';
import { ForecastDetails } from 'src/app/models/weather-details.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() forecastDetails: ForecastDetails;

  constructor() {}

  ngOnInit(): void {}
}
