import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Boarding3Page } from './boarding3.page';

const routes: Routes = [
  {
    path: '',
    component: Boarding3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Boarding3PageRoutingModule {}
