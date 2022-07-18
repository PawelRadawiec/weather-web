import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, forkJoin, from, map, of, tap } from 'rxjs';
import { CitySearchResult } from 'src/app/models/city-search-response.model';
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

    const currentDetails$ = this.weatherService.current(latitude, longitude, name);

    return forkJoin([currentDetails$]).pipe(
      map(([currentDetails]) => {
        this.weatherStore.setCurrentDetails(currentDetails);
        return true;
      }),
      catchError(() => of(false))
    );
  }
}
