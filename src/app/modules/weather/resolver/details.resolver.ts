import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, map, of } from 'rxjs';
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
    const { id, name } = route.params;
    return this.weatherService.cities(name).pipe(
      map((cities: CitySearchResult[]) => this.findCity(id, cities)),
      catchError(() => of(false))
    );
  }

  private findCity(id: number, cities: CitySearchResult[]) {
    const city = cities.find((item) => item.id === Number(id));
    if (city) {
      this.weatherStore.setCity(city);
    }
    return city !== null;
  }
}
