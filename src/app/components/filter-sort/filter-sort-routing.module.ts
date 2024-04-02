import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterSortPage } from './filter-sort.page';

const routes: Routes = [
  {
    path: '',
    component: FilterSortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterSortPageRoutingModule {}
