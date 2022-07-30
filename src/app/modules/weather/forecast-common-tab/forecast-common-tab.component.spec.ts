import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCommonTabComponent } from './forecast-common-tab.component';

describe('ForecastCommonTabComponent', () => {
  let component: ForecastCommonTabComponent;
  let fixture: ComponentFixture<ForecastCommonTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastCommonTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastCommonTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
