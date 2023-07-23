import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotBfTimePage } from './slot-bf-time.page';

const routes: Routes = [
  {
    path: '',
    component: SlotBfTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotBfTimePageRoutingModule {}
