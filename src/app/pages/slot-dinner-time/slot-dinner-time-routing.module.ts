import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotDinnerTimePage } from './slot-dinner-time.page';

const routes: Routes = [
  {
    path: '',
    component: SlotDinnerTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotDinnerTimePageRoutingModule {}
