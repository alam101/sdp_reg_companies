import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Boarding5Page } from './boarding5.page';

const routes: Routes = [
  {
    path: '',
    component: Boarding5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Boarding5PageRoutingModule {}
