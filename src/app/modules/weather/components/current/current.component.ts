import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WEATHER_CARD_CONTENT } from 'src/app/models/tokens.model';
import { WeatherCardCommon } from 'src/app/models/weather-card-common.model';
import { Current } from 'src/app/models/weather-details.model';
import { CurrentService } from '../../services/current.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
  providers: [
    {
      provide: WEATHER_CARD_CONTENT,
      useExisting: CurrentComponent,
    },
    CurrentService,
  ],
})
export class CurrentComponent implements OnInit, WeatherCardCommon {
  @Input() current: Current;
  loading: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private currentService: CurrentService
  ) {}

  ngOnInit() {
    this.loading = this.currentService.currentLoading$;
  }

  refresh() {
    const { name, latitude, longitude } = this.route.snapshot.params;
    this.currentService.current(name, latitude, longitude);
  }
}
