import { Injectable } from '@angular/core';
import { WeatherDetails } from 'src/app/models/weather-details.model';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherStoreService } from '../store/weather-store.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentService {
  constructor(
    private weatherService: WeatherService,
    private weatherStore: WeatherStoreService
  ) {}

  current(name: string, longitude: number, latitude: number) {
    this.weatherStore.setCurrentLoading(true);
    this.weatherService.current(latitude, longitude, name).subscribe({
      next: (current: WeatherDetails) => {
        this.weatherStore.setCurrentLoading(false);
        this.weatherStore.setCurrentDetails(current);
      },
      error: () => {
        this.weatherStore.setCurrentLoading(false);
      },
    });
  }
}
