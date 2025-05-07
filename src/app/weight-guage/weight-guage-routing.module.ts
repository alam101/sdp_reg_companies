import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightGuagePage } from './weight-guage.page';

const routes: Routes = [
  {
    path: '',
    component: WeightGuagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightGuagePageRoutingModule {}
