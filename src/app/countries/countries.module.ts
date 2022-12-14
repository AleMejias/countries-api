import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { ListCountriesComponent } from './pages/list-countries/list-countries.component';
import { HandleSpanTitlePipe } from './pipes/handle-span-title.pipe';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryByDetailComponent } from './pages/country-by-detail/country-by-detail.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';



@NgModule({
  declarations: [
    ListCountriesComponent,
    HandleSpanTitlePipe,
    CountryCardComponent,
    SearcherComponent,
    ByRegionComponent,
    CountryByDetailComponent,
    DetailCardComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountriesRoutingModule
  ],
  exports: [ HandleSpanTitlePipe ]
})
export class CountriesModule { }

