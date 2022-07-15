import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { FocusMonitor } from '@angular/cdk/a11y';
import { SearchFormComponent } from './search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let weatherService: any;
  let el: DebugElement;
  let focusMonitor: any;

  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'cities',
    ]);

    const focusMonitorSpy = jasmine.createSpyObj('FocusMonitor', ['monitor']);

    await TestBed.configureTestingModule({
      imports: [
        OverlayModule,
        A11yModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [SearchFormComponent],
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy },
        { provide: FocusMonitor, useValue: focusMonitorSpy },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SearchFormComponent);
        component = fixture.componentInstance;
        weatherService = TestBed.inject(WeatherService);
        focusMonitor = TestBed.inject(FocusMonitor);
        focusMonitor.monitor.and.returnValue(of(true));
        el = fixture.debugElement;
        weatherService.cities.and.returnValue(
          of([
            {
              country: 'Poland',
              id: 1991539,
              lat: 54.12,
              lon: 20.13,
              name: 'Wormditt',
              region: '',
              url: 'wormditt-poland',
            },
            {
              country: 'Poland',
              id: 1991539,
              lat: 54.12,
              lon: 20.13,
              name: 'Wormditt',
              region: '',
              url: 'wormditt-poland',
            },
          ])
        );
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cities http', fakeAsync(() => {
    const nameInput = el.query(By.css('input')).nativeElement;
    nameInput.value = 'City';
    nameInput.dispatchEvent(new Event('input'));
    tick(1_000);
    expect(weatherService.cities).toHaveBeenCalledTimes(1);
  }));

  it('should display 2 panel item', fakeAsync(() => {
    const nameInput = el.query(By.css('input')).nativeElement;
    nameInput.value = 'City';
    nameInput.dispatchEvent(new Event('input'));

    tick(1_000);
    fixture.detectChanges();

    const panel = el.queryAll(By.css('.search-form__panel'));

    const panelItems = el.queryAll(By.css('.search-form__panel__item'));
    expect(panel?.length).toBe(1);
    expect(panelItems?.length).toBe(2);
  }));
});
