import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { concatMap } from 'rxjs';

import { Country } from '../../models/country';


import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent implements OnInit {

  countriesByRegion: Country[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.queryParams)
    this.activatedRoute.queryParams.pipe(

      concatMap(( regionSelected ) => this.countryService.getCountriesByRegion( regionSelected['region'] ))
    ).subscribe(( countries ) => {

      if( countries ) {

        this.countriesByRegion = countries;

      }

    })

  }

}
