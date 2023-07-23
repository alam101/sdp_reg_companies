import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodaysCalorieCountPage } from './todays-calorie-count.page';

const routes: Routes = [
  {
    path: '',
    component: TodaysCalorieCountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodaysCalorieCountPageRoutingModule {}
