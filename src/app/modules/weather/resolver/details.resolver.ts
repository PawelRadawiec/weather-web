import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, forkJoin, map, of } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherStoreService } from '../store/weather-store.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsResolver implements Resolve<boolean> {
  constructor(
    private weatherService: WeatherService,
    private weatherStore: WeatherStoreService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const { latitude, longitude, name } = route.params;
    const currentDetails$ = this.weatherService.current(
      latitude,
      longitude,
      name
    );
    const forecastDetails$ = this.weatherService.forecast(
      latitude,
      longitude,
      name
    );
    
    return forkJoin([currentDetails$, forecastDetails$]).pipe(
      map(([currentDetails, forecastDetails]) => {
        this.weatherStore.setCurrentDetails(currentDetails);
        this.weatherStore.setForecastDetails(forecastDetails);
        return true;
      }),
      catchError(() => of(false))
    );
  }
}
