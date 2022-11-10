import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CountriesModule } from './countries/countries.module';
import { SpinnerModule } from './spinner/spinner.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './countries/components/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './spinner/interceptors/spinner.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CountriesModule,
    SpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
