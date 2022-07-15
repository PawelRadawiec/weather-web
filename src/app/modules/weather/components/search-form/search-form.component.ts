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
import {
  Observable,
  filter,
  map,
  merge,
  debounceTime,
  Subscription,
  tap,
} from 'rxjs';
import { CitySearchResult } from 'src/app/models/city-search-response.model';
import { WeatherService } from 'src/app/services/weather.service';

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
  private isPanelVisible$: Observable<boolean>;
  private isPanelHidden$: Observable<boolean>;
  private subscription = new Subscription();

  nameControl = new FormControl('');
  searchResult$: Observable<CitySearchResult[]>;
  showPanel$: Observable<boolean>;

  constructor(
    private focousMonitor: FocusMonitor,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.isPanelVisible$ = this.focousMonitor.monitor(this.inputEl).pipe(
      filter((focused) => !!focused),
      map(() => true)
    );
    this.isPanelHidden$ = merge(
      this.connectedOverlay.detach,
      this.connectedOverlay.backdropClick
    ).pipe(map(() => false));

    this.showPanel$ = merge(this.isPanelHidden$, this.isPanelVisible$);

    this.subscription.add(
      this.nameControl.valueChanges
        .pipe(debounceTime(1_000))
        .subscribe((name: string) => {
          this.searchResult$ = this.weatherService.cities(name);
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToDetails(city: any) {}
}
