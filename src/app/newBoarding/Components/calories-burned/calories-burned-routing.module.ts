import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaloriesBurnedPage } from './calories-burned.page';

const routes: Routes = [
  {
    path: '',
    component: CaloriesBurnedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaloriesBurnedPageRoutingModule {}
