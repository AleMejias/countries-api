import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map } from 'rxjs';

import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }


  getAllCountries(): Observable<Country[]>{

    return this.http.get<Country[]>('https://restcountries.com/v3.1/all')

  }

  getCountriesByRegion( currentRegion: string ) : Observable<Country[]> {

    return this.http.get<Country[]>(`https://restcountries.com/v3.1/region/${currentRegion}`)
  }
  getCountriesByName( currentName: string , countries: Country[]) : Country[] {

    let countriesFiltered = countries.filter((country) => country.name.common.toLowerCase().includes( currentName ));

    return countriesFiltered;

  }

  getCountryByCode( cca3: string ) : Observable<Country>{

    // Si mi peticion da error, retorno el string que produjo el error para mostrarlo en el componente error, caso contrario, devuelvo el resultado
    return this.http.get<Country>(`https://restcountries.com/v3.1/alpha/${cca3}`).pipe(
      catchError(err => {
        throw 'error in source. Details: ' + cca3
      }),
      map((e) => e)
    )
  }



}
