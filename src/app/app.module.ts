import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './countries/components/header/header.component';
import { HandleSpanTitlePipe } from './countries/pipes/handle-span-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HandleSpanTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
