import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { concatMap } from 'rxjs';


import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.pipe(

      concatMap(( regionSelected ) => this.countryService.getCountriesByRegion( regionSelected['region'] ))
    ).subscribe(( countries ) => {

      console.log('PAISES QUE RECIBO POR RUTA ',countries);

    })

  }

}
