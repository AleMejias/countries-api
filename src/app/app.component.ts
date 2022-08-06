import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('themeMode') themeMode!: ElementRef;

  handleThemeMode( themeMode: boolean ) {

    if( themeMode ) {

      this.themeMode.nativeElement.classList.add('dark')
    } else {
      this.themeMode.nativeElement.classList.remove('dark')
    }

  }
}
