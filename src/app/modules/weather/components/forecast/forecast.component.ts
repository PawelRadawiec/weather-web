import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WEATHER_CARD_CONTENT } from 'src/app/models/tokens.model';
import { WeatherCardCommon } from 'src/app/models/weather-card-common.model';
import { Day, ForecastDay, ForecastDetails } from 'src/app/models/weather-details.model';
import { ForecastService } from '../../services/forecast.service';
import { ForecastDetailsComponent } from '../forecast-details/forecast-details.component';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  providers: [
    {
      provide: WEATHER_CARD_CONTENT,
      useExisting: ForecastComponent,
    },
    ForecastService,
  ],
})
export class ForecastComponent implements OnInit, WeatherCardCommon {
  @Input() forecastDetails: ForecastDetails;
  loading: Observable<boolean>;

  constructor(
    private router: ActivatedRoute,
    private forecastService: ForecastService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loading = this.forecastService.forecastLoading$;
  }

  refresh() {
    const { latitude, longitude, name } = this.router.snapshot.params;
    this.forecastService.forecast(latitude, longitude, name);
  }

  details(forecastday: ForecastDay) {
    this.dialog.open(ForecastDetailsComponent, {
      data: forecastday
    })
  }

}
