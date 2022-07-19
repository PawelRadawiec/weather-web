import { InjectionToken } from '@angular/core';
import { WeatherCardCommon } from './weather-card-common.model';

export const WEATHER_CARD_CONTENT = new InjectionToken<WeatherCardCommon>(
  'card-common'
);
