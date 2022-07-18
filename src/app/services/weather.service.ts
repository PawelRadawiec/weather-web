import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, shareReplay, Subject } from 'rxjs';
import { CitySearchResult } from '../models/city-search-response.model';
import { WeatherDetails } from '../models/weather-details.model';
import { WeatherStoreService } from '../modules/weather/store/weather-store.service';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(
    private http: HttpClient,
    private weatherStore: WeatherStoreService
  ) {}

  cities(name: string) {
    this.weatherStore.setLoading(true);
    return this.http
      .get<CitySearchResult[]>(`/search.json`, {
        params: { q: name },
      })
      .pipe(
        shareReplay(),
        finalize(() => this.weatherStore.setLoading(false))
      );
  }

  current(latitude: number, longitude: number, name: string) {
    this.weatherStore.setLoading(true);
    return this.http
      .get<WeatherDetails>(`/current.json`, {
        params: { q: `${latitude},${longitude},${name}` },
      })
      .pipe(
        shareReplay(),
        finalize(() => this.weatherStore.setLoading(false))
      );
  }
}
