import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../models/country';

@Component({
  selector: 'app-country-by-detail',
  templateUrl: './country-by-detail.component.html',
  styleUrls: ['./country-by-detail.component.scss']
})
export class CountryByDetailComponent implements OnInit, OnDestroy {


  activatedRouteSuscription!: Subscription;

  countryDetail!: Country;
  countriesByBorder!: Country[];
  paramsCode: string  = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesServie: CountriesService
  ){}

  ngOnInit(): void {



    this.activatedRouteSuscription= this.activatedRoute.queryParams.subscribe({

      next: ( country) => {

        if( country !== null ) {

          const { code } = country;

          this.paramsCode= code;
          this.onLoadCountriesByDetail();

        }
        // console.log('SUSCRIPCION A OBSERVABLE DE CAMBIOS DE RUTA ',country);

      }
    });
    this.onLoadCountriesByDetail();

  }

  onLoadCountriesByDetail(){

    // console.log('PARAMETRO RECIBO POR LA RUTA ',this.paramsCode)

    this.countriesServie.getCountriesDetail( this.paramsCode ).subscribe({
      next: ( country ) => {

        console.log('COUNTRY RESPONSE ',country)

        this.countriesByBorder = [];
/*         if( !Object.prototype.hasOwnProperty.call(country, 'borders') ) {

          console.log('Estoy entrando aqui y por eso no muestro los bordes que tiene')
          const [ countryWithOutBorders ] = country;

          this.countryDetail = countryWithOutBorders;
          return;

        } */
        country.forEach(( currentCountry ) => {

          if( currentCountry.cca3 === this.paramsCode ) {

            this.countryDetail = currentCountry;

          } else {

            if( Object.prototype.hasOwnProperty.call(currentCountry, 'borders') ){

              this.countriesByBorder.push( currentCountry );
            }
/*
            this.countriesByBorder.push( currentCountry ); */

          }

        })

/*         console.log('countryDeatil ',this.countryDetail)
        console.log('this.countriesByBorder ',this.countriesByBorder) */
      },
      error: ( err ) => {

        console.log(err);
      }
    });

  }


  handleCurrentParamsCode(cca3: string){

    this.paramsCode= cca3;
    this.onLoadCountriesByDetail();

  }

  ngOnDestroy(): void {
      this.activatedRouteSuscription.unsubscribe();
  }

}
