import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CitySearchResult } from 'src/app/models/city-search-response.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherStoreService {
  private _loadingSubject = new BehaviorSubject<boolean>(false);
  readonly loading$ = this._loadingSubject.asObservable();

  private _citySubject = new BehaviorSubject<CitySearchResult>(null);
  readonly city$ = this._citySubject.asObservable();

  constructor() {}

  setLoading(loading: boolean) {
    this._loadingSubject.next(loading);
  }

  setCity(city: CitySearchResult) {
    this._citySubject.next(city);
  }
}
