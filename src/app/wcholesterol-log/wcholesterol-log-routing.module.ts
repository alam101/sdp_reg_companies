import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WcholesterolLogPage } from './wcholesterol-log.page';

const routes: Routes = [
  {
    path: '',
    component: WcholesterolLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WcholesterolLogPageRoutingModule {}
