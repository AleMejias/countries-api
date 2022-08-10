import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';
import { concatMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';

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


  filtersForm = new FormGroup({
    searcher: new FormControl( '' ),
    filters: new FormControl( '' )
  })

  constructor(
    private countryService: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.filtersForm.controls['searcher'].valueChanges.subscribe((searcher) => {

      console.log('Cambios de mi formulario searcher',searcher);

    })

    this.filtersForm.controls['filters'].valueChanges.subscribe((filters) => {

      if( filters ) {

        console.log('Cambios de mi formulario filters',filters);
        if( filters === 'all' ) {

          this.regionSelected= 'All countries';
          this.router.navigate(['/list']);


        } else {

          this.regionSelected= `${ filters }`;
          this.router.navigate(['/region'],{ queryParams: { region: filters } })

        }

      }



    })

  }

  onSubmit( e: SubmitEvent ){

    e.preventDefault();

    console.log('VALORS DEL FORMULARIO ENVIADOS ',this.filtersForm.value);
  }

}
