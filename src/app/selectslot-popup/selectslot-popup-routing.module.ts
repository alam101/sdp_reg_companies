import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectslotPopupPage } from './selectslot-popup.page';

const routes: Routes = [
  {
    path: '',
    component: SelectslotPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectslotPopupPageRoutingModule {}
