import { Component } from '@angular/core';
import {
  ForecastCommonTabService,
  TempMode,
} from 'src/app/services/forecast-common-tab.service';

@Component({
  selector: 'app-forecast-common-tab',
  templateUrl: './forecast-common-tab.component.html',
  styleUrls: ['./forecast-common-tab.component.scss'],
})
export class ForecastCommonTabComponent {
  tempMode = TempMode;

  constructor(public commonService: ForecastCommonTabService) {}

  toggleTemp(tempMode: TempMode) {
    this.commonService.setTempMode(tempMode);
  }
}
