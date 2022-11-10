import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('themeMode') themeMode!: ElementRef;
  themeModeFlag: boolean= false;

  handleThemeMode( themeMode: boolean ) {

    if( themeMode ) {

      this.themeMode.nativeElement.classList.add('dark');
      this.themeModeFlag= true;
    } else {
      this.themeMode.nativeElement.classList.remove('dark');
      this.themeModeFlag= false;
    }

  }
}
