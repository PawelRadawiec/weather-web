import { Component, Input, OnInit } from '@angular/core';
import { WeatherDetails } from 'src/app/models/weather-details.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() details: WeatherDetails;

  // just for test case
  @Input() displayDays = false;

  constructor() {}

  ngOnInit(): void {}
}
