import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotLunchTimePage } from './slot-lunch-time.page';

const routes: Routes = [
  {
    path: '',
    component: SlotLunchTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotLunchTimePageRoutingModule {}
