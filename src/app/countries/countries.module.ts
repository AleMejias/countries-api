import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';


import { ListCountriesComponent } from './pages/list-countries/list-countries.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    ListCountriesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }

