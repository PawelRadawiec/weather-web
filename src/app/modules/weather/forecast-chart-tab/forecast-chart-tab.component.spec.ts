import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastChartTabComponent } from './forecast-chart-tab.component';

describe('ForecastChartTabComponent', () => {
  let component: ForecastChartTabComponent;
  let fixture: ComponentFixture<ForecastChartTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastChartTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastChartTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
