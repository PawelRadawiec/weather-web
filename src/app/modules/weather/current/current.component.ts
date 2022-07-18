import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WEATHER_CARD_CONTENT } from 'src/app/models/tokens.model';
import { WeatherCardCommon } from 'src/app/models/weather-card-common.model';
import { Current, WeatherDetails } from 'src/app/models/weather-details.model';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherStoreService } from '../store/weather-store.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
  providers: [
    {
      provide: WEATHER_CARD_CONTENT,
      useExisting: CurrentComponent,
    },
  ],
})
export class CurrentComponent implements OnInit, WeatherCardCommon {
  @Input() current: Current;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private weatherStore: WeatherStoreService
  ) {}

  ngOnInit() {}

  refresh() {
    const { name, latitude, longitude } = this.route.snapshot.params;
    this.weatherService.current(latitude, longitude, name).subscribe({
      next: (current: WeatherDetails) => {
        this.weatherStore.setCurrentDetails(current);
      },
      error: () => {},
    });
  }
}
