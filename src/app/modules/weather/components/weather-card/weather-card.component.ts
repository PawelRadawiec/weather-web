import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { WEATHER_CARD_CONTENT } from 'src/app/models/tokens.model';
import { WeatherCardCommon } from 'src/app/models/weather-card-common.model';
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

  @ContentChild(WEATHER_CARD_CONTENT, { static: true })
  contentChild: WeatherCardCommon;

  constructor() {}

  ngOnInit() {}

  onRefresh() {
    this.contentChild.refresh();
  }
}
