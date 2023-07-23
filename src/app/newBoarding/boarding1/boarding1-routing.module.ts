import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Boarding1Page } from './boarding1.page';

const routes: Routes = [
  {
    path: '',
    component: Boarding1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Boarding1PageRoutingModule {}
