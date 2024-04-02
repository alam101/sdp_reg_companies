import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlternateSearchPage } from './alternate-search.page';

const routes: Routes = [
  {
    path: '',
    component: AlternateSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlternateSearchPageRoutingModule {}
