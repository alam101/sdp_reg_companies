import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpgradLevel1Page } from './upgrad-level1.page';

const routes: Routes = [
  {
    path: '',
    component: UpgradLevel1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpgradLevel1PageRoutingModule {}
