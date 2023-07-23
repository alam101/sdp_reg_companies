import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetoxPlanPage } from './detox-plan.page';

const routes: Routes = [
  {
    path: '',
    component: DetoxPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetoxPlanPageRoutingModule {}
