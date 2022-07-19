import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsResolver } from './resolver/details.resolver';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'details/:latitude/:longitude/:name',
    component: DetailsComponent,
    resolve: [DetailsResolver],
  },
  {
    path: '**',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
