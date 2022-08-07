import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';


import { ListCountriesComponent } from './pages/list-countries/list-countries.component';
import { HandleSpanTitlePipe } from './pipes/handle-span-title.pipe';
import { CountryCardComponent } from './components/country-card/country-card.component';



@NgModule({
  declarations: [
    ListCountriesComponent,
    HandleSpanTitlePipe,
    CountryCardComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  exports: [ HandleSpanTitlePipe ]
})
export class CountriesModule { }

