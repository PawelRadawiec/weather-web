import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private _darkMode = new BehaviorSubject<boolean>(true);
  readonly darkMode$ = this._darkMode.asObservable();

  constructor() {}

  setDarkMode(darkMode: boolean) {
    this._darkMode.next(darkMode);
  }
}
