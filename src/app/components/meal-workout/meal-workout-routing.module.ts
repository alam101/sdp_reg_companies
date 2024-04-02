import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealWorkoutPage } from './meal-workout.page';

const routes: Routes = [
  {
    path: '',
    component: MealWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealWorkoutPageRoutingModule {}
