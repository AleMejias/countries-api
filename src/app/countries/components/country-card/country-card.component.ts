import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input() country!: Country[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {


  }


  countrySelected( countrySelected: string ){

    console.log('SELECCIONASTE ESTE ',countrySelected)
    this.router.navigate(['/detail'] , { queryParams: { code :countrySelected } } );

  }

}
