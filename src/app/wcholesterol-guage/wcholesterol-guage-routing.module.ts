import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WcholesterolGuagePage } from './wcholesterol-guage.page';

const routes: Routes = [
  {
    path: '',
    component: WcholesterolGuagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WcholesterolGuagePageRoutingModule {}
