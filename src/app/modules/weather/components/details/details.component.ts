import { Component, OnInit } from '@angular/core';
import { WeatherStoreService } from '../../store/weather-store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {  

  constructor(public weatherStore: WeatherStoreService) {}

  ngOnInit() {}
}
