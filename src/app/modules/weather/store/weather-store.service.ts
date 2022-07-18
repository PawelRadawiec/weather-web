import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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
  readonly _forecastDetails$ = this._forecastSubject.asObservable();

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
}
