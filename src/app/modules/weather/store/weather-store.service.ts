import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CitySearchResult } from 'src/app/models/city-search-response.model';
import {
  ForecastDetails,
  WeatherDetails,
} from 'src/app/models/weather-details.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherStoreService {
  private _loadingSubject = new BehaviorSubject<boolean>(false);
  readonly loading$ = this._loadingSubject.asObservable();

  private _citySubject = new BehaviorSubject<CitySearchResult>(null);
  readonly city$ = this._citySubject.asObservable();

  private _cityCurrentDetailsSubject = new BehaviorSubject<WeatherDetails>(
    null
  );
  readonly cityCurrentDetails$ = this._cityCurrentDetailsSubject.asObservable();

  private _forecastSubject = new BehaviorSubject<ForecastDetails>(null);
  readonly forecastDetails$ = this._forecastSubject.asObservable();

  private _forecastLoadingSubject = new BehaviorSubject<boolean>(false);
  readonly forecastLoading$ = this._forecastLoadingSubject.asObservable();

  private _currentLoadingSubject = new BehaviorSubject<boolean>(false);
  readonly currentLoading$ = this._currentLoadingSubject.asObservable();

  constructor() {}

  setLoading(loading: boolean) {
    this._loadingSubject.next(loading);
  }

  setCity(city: CitySearchResult) {
    this._citySubject.next(city);
  }

  setCurrentDetails(weatherDetails: WeatherDetails) {
    this._cityCurrentDetailsSubject.next(weatherDetails);
  }

  setForecastDetails(forecastDetails: ForecastDetails) {
    this._forecastSubject.next(forecastDetails);
  }

  setForecastLoading(loading: boolean) {
    this._forecastLoadingSubject.next(loading);
  }

  setCurrentLoading(loading: boolean) {
    this._currentLoadingSubject.next(loading);
  }
}
