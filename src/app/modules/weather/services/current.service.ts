import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDetails } from 'src/app/models/weather-details.model';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherStoreService } from '../store/weather-store.service';

@Injectable()
export class CurrentService {
  currentLoading$: Observable<boolean>;

  constructor(
    private weatherService: WeatherService,
    private weatherStore: WeatherStoreService
  ) {
    this.currentLoading$ = weatherStore.currentLoading$;
  }

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
