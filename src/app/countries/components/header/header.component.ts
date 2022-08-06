import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() themeModeEvent = new EventEmitter<boolean>();
  flagThemeMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  handleThemeMode(){

    this.flagThemeMode = !this.flagThemeMode;
    this.themeModeEvent.emit( this.flagThemeMode );
  }

}
