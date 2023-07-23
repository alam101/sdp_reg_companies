import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetoxPage } from './detox.page';

const routes: Routes = [
  {
    path: '',
    component: DetoxPage
  },
  {
    path: 'detox-plan',
    loadChildren: () => import('./detox-plan/detox-plan.module').then( m => m.DetoxPlanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetoxPageRoutingModule {}
