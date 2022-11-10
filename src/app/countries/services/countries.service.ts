import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map, Subject, mergeMap, concatMap } from 'rxjs';
import { environment } from 'src/environments/environment';


import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private allCountries: Country[] = [];

  constructor(
    private http: HttpClient
  ) { }


  getAllCountries(): Observable<Country[]>{

    return this.http.get<Country[]>(`${environment.url}/${environment.categories.all}`).pipe(
      catchError(err => {
        throw 'error in source. Details: '
      }),
      map((e) => {

        this.allCountries = e;
        return e;
      })
    )

  }

  getCountriesDetail( countryCode: string ) {

    console.log('COUNTRIES ',countryCode)



    return this.http.get<Country[]>(`${environment.url}/${environment.categories.alpha}/${countryCode}`).pipe(
      catchError(err => {
        throw 'error in source. Details: ' + countryCode
      }),
      concatMap(( countries ) => {
        console.log('QUE PAIS ES ESTE ',countries)
        const [ response ] = countries;

        if( Object.prototype.hasOwnProperty.call(response, 'borders')) {
          console.log('PAIS CON PROPERTY BORDERS')

          const { borders } = response;
          const listOfCodes = `${borders.join(',')},${response.cca3}`;

          return this.http.get<Country[]>(`${environment.url}/${environment.categories.alpha}?codes=${listOfCodes}`)

        }else {
          console.log('PAIS QUE NO TIENE PROPERTY BORDERS')
          return this.getCountryByCode( countryCode );

        }
      })
    )
    // const countries = this.allCountries.filter(( country ) => country.cca3 === countryCode )
    // let countryByBorder: Country[] = [];

    // if( countries ) {

    //   console.log('COUNTRIES ',countries)
    //   const [ response ] = countries;
    //   const { borders } = response;


    //   countryByBorder = this.allCountries.filter(( country ) => borders.includes( country.cca3 ) )
    //   console.log(response)

    // }

    // return {
    //   countries,
    //   countryByBorder
    // };
  }

  getCountriesByRegion( currentRegion: string ) : Observable<Country[]> {

    return this.http.get<Country[]>(`${environment.url}/${environment.categories.region}/${currentRegion}`)
  }
  getCountriesByName( currentName: string , countries: Country[]) : Country[] {

    let countriesFiltered = countries.filter((country) => country.name.common.toLowerCase().includes( currentName ));

    return countriesFiltered;

  }

  getCountryByCode( cca3: string ) : Observable<Country[]>{

    // Si mi peticion da error, retorno el string que produjo el error para mostrarlo en el componente error, caso contrario, devuelvo el resultado
    return this.http.get<Country[]>(`${environment.url}/${environment.categories.alpha}/${cca3}`).pipe(
      catchError(err => {
        throw 'error in source. Details: ' + cca3
      }),
      map((e) => e)
    )
  }



}
