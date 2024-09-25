import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietitianProfilePage } from './dietitian-profile.page';

const routes: Routes = [
  {
    path: '',
    component: DietitianProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietitianProfilePageRoutingModule {}
