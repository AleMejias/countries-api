import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, debounceTime } from 'rxjs';


import { Country } from '../../models/country';


interface Options {
  value: string;
  label: string;
}
@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})


export class SearcherComponent implements OnInit {

  regionSelected: string = "Filter By Región";
  regionOptions: Options [] = [
    { value: 'all', label: 'All countries' },
    { value: 'africa', label: 'África' },
    { value: 'america', label: 'América'  },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europa' },
    { value: 'oceania', label: 'Oceanía' },
  ]

  countriesFiltered: Country[] = [];
  countriesFilteredFlag: boolean= false;
  @Input() countries: Country[] = [];

  filtersForm = new FormGroup({
    searcher: new FormControl( '' ),
    filters: new FormControl( '' )
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {


    this.formControls['searcher'].valueChanges.pipe(
      debounceTime(300),
      map((e) => {

        return this.countries.filter((country) => country.name.common.toLowerCase().includes( e?.toLowerCase().trim() || "" ))
      })
    )
    .subscribe(( response ) => {


      if( response.length > 0 ) {

        this.countriesFiltered= response;
        this.countriesFilteredFlag= true;

      } else {

        this.countriesFilteredFlag= false;

      }

    })

    this.filtersForm.controls['filters'].valueChanges.subscribe((filters) => {



      if( filters === 'all' ) {

        this.regionSelected= 'All countries';

        this.router.navigate(['/list']);
        return;


      }

      this.regionSelected= `${ filters }`;

      this.router.navigate(['/region' ],{ queryParams: { region: filters } })


    })

  }

  get formControls(){ return this.filtersForm.controls; }

  navigateToCountryDeatil(  country: Country ) {

    this.router.navigate(['/detail'] , { queryParams: { code :country.cca3 } })


  }
  onSubmit( e: SubmitEvent ){

    e.preventDefault();

  }

}
