import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotPostDinnerTimePage } from './slot-post-dinner-time.page';

const routes: Routes = [
  {
    path: '',
    component: SlotPostDinnerTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotPostDinnerTimePageRoutingModule {}
