import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealPrefPagePage } from './meal-pref-page.page';

const routes: Routes = [
  {
    path: '',
    component: MealPrefPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealPrefPagePageRoutingModule {}
