import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmallMealCardPage } from './small-meal-card.page';

const routes: Routes = [
  {
    path: '',
    component: SmallMealCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmallMealCardPageRoutingModule {}
