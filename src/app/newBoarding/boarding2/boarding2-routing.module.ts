import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Boarding2Page } from './boarding2.page';

const routes: Routes = [
  {
    path: '',
    component: Boarding2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Boarding2PageRoutingModule {}
