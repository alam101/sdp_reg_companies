import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchAutoPage } from './search-auto.page';

const routes: Routes = [
  {
    path: '',
    component: SearchAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchAutoPageRoutingModule {}
