import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RewardProductPage } from './reward-product.page';

const routes: Routes = [
  {
    path: '',
    component: RewardProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RewardProductPageRoutingModule {}
