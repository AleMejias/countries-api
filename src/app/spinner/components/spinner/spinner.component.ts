import { Component, Input, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <section class="spinnerContainer" *ngIf="isLoading$ | async">

    <div class="spinnerContainer__spinner" [ngClass]="{'spinnerContainer__spinner--bg-dark' : this.themeMode == true ,'spinnerContainer__spinner--bg-white' : this.themeMode == false}"></div>

  </section>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() themeMode: boolean= false;
  isLoading$= this.spinnerService.isLoading$;

  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
  }

}
