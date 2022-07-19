import { Observable } from "rxjs";

export interface WeatherCardCommon {
  refresh: () => void;
  loading: Observable<boolean>;
}
