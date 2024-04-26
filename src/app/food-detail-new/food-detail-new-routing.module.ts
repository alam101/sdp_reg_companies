import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodDetailNewPage } from './food-detail-new.page';

const routes: Routes = [
  {
    path: '',
    component: FoodDetailNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodDetailNewPageRoutingModule {}
