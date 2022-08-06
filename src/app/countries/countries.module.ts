import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';


import { ListCountriesComponent } from './pages/list-countries/list-countries.component';
import { HandleSpanTitlePipe } from './pipes/handle-span-title.pipe';



@NgModule({
  declarations: [
    ListCountriesComponent,
    HandleSpanTitlePipe
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  exports: [ HandleSpanTitlePipe ]
})
export class CountriesModule { }

