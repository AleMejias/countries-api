import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  regionSelected: string = "";

  filtersForm = new FormGroup({
    searcher: new FormControl( '' ),
    filters: new FormControl( '' )
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.filtersForm.controls['searcher'].valueChanges.subscribe((searcher) => {

      console.log('Cambios de mi formulario searcher',searcher);

    })
    this.filtersForm.controls['filters'].valueChanges.subscribe((filters) => {

      if( filters ) {
        console.log('Cambios de mi formulario filters',filters);

        this.router.navigate(['/region'],{ queryParams: { region: filters } })
      }



    })

  }

  onSubmit(){

    console.log('VALORS DEL FORMULARIO ENVIADOS ',this.filtersForm.value);
  }

}
