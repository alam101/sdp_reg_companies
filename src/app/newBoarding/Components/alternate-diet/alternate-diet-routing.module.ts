import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlternateDietPage } from './alternate-diet.page';

const routes: Routes = [
  {
    path: '',
    component: AlternateDietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlternateDietPageRoutingModule {}
