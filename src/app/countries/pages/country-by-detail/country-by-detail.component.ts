import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, tap, concatMap, catchError } from 'rxjs';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../models/country';

@Component({
  selector: 'app-country-by-detail',
  templateUrl: './country-by-detail.component.html',
  styleUrls: ['./country-by-detail.component.scss']
})
export class CountryByDetailComponent implements OnInit {

  country: Partial<Country>= {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.pipe(
      concatMap((current ) => this.countryService.getCountryByCode( current['code'] )),
    ).subscribe({
      next: ( response ) => {

        if( response ) {
          this.country = response;
        }

      },
      error: (error) => {
        console.log('AQUI RECIBI error ',error )
      }
    })
    // this.activatedRoute.queryParams.subscribe((country) => {

    //   console.log('Pais recibido en CountryByDetailComponent ',JSON.stringify(country));

    // })
  }

}
