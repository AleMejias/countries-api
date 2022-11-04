import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Country } from '../../models/country';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  @Input() country!: Country;
  @Input() countriesByBorder!: Country[];
  @Output() paramsCodeEvent = new EventEmitter<string>();

  countryLanguages!: string;
  currentCountry!: Country;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.countryLanguages = "";

    this.countryLanguages= Object.values( this.country.languages ).join(', ');

  }

  changeUrlParams( cca3: string ) {

    this.paramsCodeEvent.emit(cca3);
    this.router.navigate(['/detail'] , { queryParams: { code :cca3 } } );

  }

  goBack(){

    this.location.back();

  }

}
