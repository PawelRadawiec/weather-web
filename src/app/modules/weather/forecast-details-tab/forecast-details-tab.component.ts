import { Component, Input, OnInit } from '@angular/core';
import { ForecastDay } from 'src/app/models/weather-details.model';
import { ForecastCommonTabService, TempMode } from 'src/app/services/forecast-common-tab.service';

@Component({
  selector: 'app-forecast-details-tab',
  templateUrl: './forecast-details-tab.component.html',
  styleUrls: ['./forecast-details-tab.component.scss'],
})
export class ForecastDetailsTabComponent implements OnInit {
  @Input() data: ForecastDay;

  tempMode = TempMode;

  constructor(public commonTabService: ForecastCommonTabService) {}

  ngOnInit() {}
}
