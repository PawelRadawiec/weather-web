import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { CitySearchResult } from '../models/city-search-response.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  readonly url = '';

  constructor(private http: HttpClient) {}

  cities(name: string) {
    return this.http
      .get<CitySearchResult[]>(
        'https://weatherapi-com.p.rapidapi.com/search.json',
        { params: { q: name } }
      )
      .pipe(shareReplay());
  }
}
