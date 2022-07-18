import { Component, Input, OnInit } from '@angular/core';
import {
  ForecastDetails,
  WeatherDetails,
} from 'src/app/models/weather-details.model';

export type WeatherDetailsCardType = WeatherDetails | ForecastDetails;

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() details: WeatherDetailsCardType;

  constructor() {}

  ngOnInit() {}
}
