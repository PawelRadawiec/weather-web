import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import {
  Observable,
  filter,
  map,
  merge,
  debounceTime,
  Subscription,
  distinctUntilChanged,
} from 'rxjs';
import { CitySearchResult } from 'src/app/models/city-search-response.model';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherStoreService } from '../../store/weather-store.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @ViewChild(CdkConnectedOverlay, { static: true })
  private connectedOverlay: CdkConnectedOverlay;
  @ViewChild(MatInput, { read: ElementRef, static: true })
  private inputEl: ElementRef;
  private subscription = new Subscription();

  nameControl = new FormControl('');
  searchResult$: Observable<CitySearchResult[]>;
  showPanel$: Observable<boolean>;

  constructor(
    private router: Router,
    private focousMonitor: FocusMonitor,
    public weatherService: WeatherService,
    public weatherStore: WeatherStoreService
  ) {}

  ngOnInit() {
    this.showPanel$ = merge(
      merge(
        this.connectedOverlay.detach,
        this.connectedOverlay.backdropClick
      ).pipe(map(() => false)),
      this.focousMonitor.monitor(this.inputEl).pipe(
        filter((focused) => !!focused),
        map(() => true)
      )
    );

    this.subscription.add(
      this.nameControl.valueChanges
        .pipe(debounceTime(1_000), distinctUntilChanged())
        .subscribe((name: string) => {
          this.searchResult$ = this.weatherService.cities(name);
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToDetails(city: CitySearchResult) {
    this.router.navigate([`weather/details/${city.lat}/${city.lon}`]);
  }
}
