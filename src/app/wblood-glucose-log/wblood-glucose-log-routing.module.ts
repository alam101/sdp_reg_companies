import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WbloodGlucoseLogPage } from './wblood-glucose-log.page';

const routes: Routes = [
  {
    path: '',
    component: WbloodGlucoseLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WbloodGlucoseLogPageRoutingModule {}
