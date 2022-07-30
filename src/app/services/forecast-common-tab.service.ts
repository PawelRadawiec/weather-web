import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum TempMode {
  CELSIUS = 'CELSIUS',
  FAHRENHEIT = 'FAHRENHEIT',
}

@Injectable({
  providedIn: 'root',
})
export class ForecastCommonTabService {
  private _toogleTemp = new BehaviorSubject(TempMode.CELSIUS);

  readonly tempMode$ = this._toogleTemp.asObservable();

  constructor() {}

  setTempMode(tempMode: TempMode) {
    this._toogleTemp.next(tempMode);
  }
}
