import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortionCountPage } from './portion-count.page';

const routes: Routes = [
  {
    path: '',
    component: PortionCountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortionCountPageRoutingModule {}
