import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CountriesModule } from './countries/countries.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './countries/components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CountriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
