import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WbloodPressureGuagePage } from './wblood-pressure-guage.page';

const routes: Routes = [
  {
    path: '',
    component: WbloodPressureGuagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WbloodPressureGuagePageRoutingModule {}
