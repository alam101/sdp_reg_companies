import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpgradLevelPage } from './upgrad-level.page';

const routes: Routes = [
  {
    path: '',
    component: UpgradLevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpgradLevelPageRoutingModule {}
