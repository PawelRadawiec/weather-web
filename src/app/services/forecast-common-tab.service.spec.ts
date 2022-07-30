import { TestBed } from '@angular/core/testing';

import { ForecastCommonTabService } from './forecast-common-tab.service';

describe('ForecastCommonTabService', () => {
  let service: ForecastCommonTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastCommonTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
