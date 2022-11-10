import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryByDetailComponent } from './pages/country-by-detail/country-by-detail.component';
import { ListCountriesComponent } from './pages/list-countries/list-countries.component';

const routes: Routes = [

  {
    path: '',
    children: [

      {
        path: 'list',
        component: ListCountriesComponent
      },
      {
        path: 'region',
        component: ByRegionComponent
      },
      {
        path: 'detail',
        component: CountryByDetailComponent
      },
      { path: '**', redirectTo: 'list' }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
