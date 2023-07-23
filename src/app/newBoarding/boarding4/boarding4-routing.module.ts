import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Boarding4Page } from './boarding4.page';

const routes: Routes = [
  {
    path: '',
    component: Boarding4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Boarding4PageRoutingModule {}
