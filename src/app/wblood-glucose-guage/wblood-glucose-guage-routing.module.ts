import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WbloodGlucoseGuagePage } from './wblood-glucose-guage.page';

const routes: Routes = [
  {
    path: '',
    component: WbloodGlucoseGuagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WbloodGlucoseGuagePageRoutingModule {}
