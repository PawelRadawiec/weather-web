import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SearchFormComponent, SearchComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatInputModule,
    OverlayModule,
    A11yModule,
    MatIconModule
  ],
})
export class WeatherModule {}
