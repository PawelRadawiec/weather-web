import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastDetails } from 'src/app/models/weather-details.model';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherStoreService } from '../store/weather-store.service';

@Injectable()
export class ForecastService {
  forecastLoading$: Observable<boolean>;

  constructor(
    private weatherService: WeatherService,
    private weatherStore: WeatherStoreService
  ) {
    this.forecastLoading$ = weatherStore.forecastLoading$;
  }

  forecast(name: string, longitude: number, latitude: number) {
    this.weatherStore.setForecastLoading(true);
    this.weatherService.forecast(latitude, longitude, name).subscribe({
      next: (forecastDetails: ForecastDetails) => {
        this.weatherStore.setForecastLoading(false);
        this.weatherStore.setForecastDetails(forecastDetails);
      },
      error: () => {
        this.weatherStore.setForecastLoading(false);
      },
    });
  }
}
