import { Injectable } from '@angular/core';
import { ForecastDetails } from 'src/app/models/weather-details.model';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherStoreService } from '../store/weather-store.service';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(
    private weatherService: WeatherService,
    private weatherStore: WeatherStoreService
  ) {}

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
