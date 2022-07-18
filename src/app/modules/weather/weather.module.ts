import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DetailsComponent } from './components/details/details.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

import { MatButtonModule } from '@angular/material/button';
import { DayPipe } from './pipes/day.pipe';
@NgModule({
  declarations: [
    SearchFormComponent,
    SearchComponent,
    DetailsComponent,
    WeatherCardComponent,
    DayPipe,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatInputModule,
    OverlayModule,
    A11yModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  providers: [],
})
export class WeatherModule {}
