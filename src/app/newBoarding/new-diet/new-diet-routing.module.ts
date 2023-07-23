import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDietPage } from './new-diet.page';

const routes: Routes = [
  {
    path: '',
    component: NewDietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDietPageRoutingModule {}
