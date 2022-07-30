import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDetailsTabComponent } from './forecast-details-tab.component';

describe('ForecastDetailsTabComponent', () => {
  let component: ForecastDetailsTabComponent;
  let fixture: ComponentFixture<ForecastDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastDetailsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
