import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDetailsTabsComponent } from './forecast-details-tabs.component';

describe('ForecastDetailsTabsComponent', () => {
  let component: ForecastDetailsTabsComponent;
  let fixture: ComponentFixture<ForecastDetailsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastDetailsTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastDetailsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
