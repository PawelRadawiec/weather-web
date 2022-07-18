import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WEATHER_CARD_CONTENT } from 'src/app/models/tokens.model';
import { WeatherCardCommon } from 'src/app/models/weather-card-common.model';
import { ForecastDetails } from 'src/app/models/weather-details.model';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherStoreService } from '../../store/weather-store.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  providers: [
    {
      provide: WEATHER_CARD_CONTENT,
      useExisting: ForecastComponent,
    },
  ],
})
export class ForecastComponent implements OnInit, WeatherCardCommon {
  @Input() forecastDetails: ForecastDetails;

  constructor(
    private router: ActivatedRoute,
    private weatherService: WeatherService,
    private weatherStore: WeatherStoreService
  ) {}

  ngOnInit() {}

  refresh() {
    const { latitude, longitude, name } = this.router.snapshot.params;
    this.weatherService.forecast(latitude, longitude, name, 7).subscribe({
      next: (forecastDetails: ForecastDetails) => {
        this.weatherStore.setForecastDetails(forecastDetails);
      },
      error: () => {},
    });
  }
}
