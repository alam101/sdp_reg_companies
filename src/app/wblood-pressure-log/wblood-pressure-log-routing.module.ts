import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WbloodPressureLogPage } from './wblood-pressure-log.page';

const routes: Routes = [
  {
    path: '',
    component: WbloodPressureLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WbloodPressureLogPageRoutingModule {}
