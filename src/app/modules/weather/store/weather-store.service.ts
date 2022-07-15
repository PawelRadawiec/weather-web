import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherStoreService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  readonly loading$ = this.loadingSubject.asObservable();

  constructor() {}

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }
}
