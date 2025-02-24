import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RewardDealPage } from './reward-deal.page';

const routes: Routes = [
  {
    path: '',
    component: RewardDealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RewardDealPageRoutingModule {}
