import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealWorkoutCPage } from './meal-workout-c.page';

const routes: Routes = [
  {
    path: '',
    component: MealWorkoutCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealWorkoutCPageRoutingModule {}
