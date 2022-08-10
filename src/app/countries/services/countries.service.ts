import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  getCountriesByName( currentName: string ) : Observable<Country[]> {

    return this.http.get<Country[]>(`https://restcountries.com/v3.1/name/${currentName}`)
  }
}
