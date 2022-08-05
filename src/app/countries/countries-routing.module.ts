import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountriesComponent } from './pages/list-countries/list-countries.component';

const routes: Routes = [

  {
    path: '',
    component: ListCountriesComponent,
    children: [

      {
        path: 'list',
        component: ListCountriesComponent
      }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
