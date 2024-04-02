import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSuggestionsPage } from './view-suggestions.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSuggestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSuggestionsPageRoutingModule {}
