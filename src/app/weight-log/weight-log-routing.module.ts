import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightLogPage } from './weight-log.page';

const routes: Routes = [
  {
    path: '',
    component: WeightLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightLogPageRoutingModule {}
