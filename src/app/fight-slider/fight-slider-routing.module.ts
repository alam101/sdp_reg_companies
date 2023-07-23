import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FightSliderPage } from './fight-slider.page';

const routes: Routes = [
  {
    path: '',
    component: FightSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FightSliderPageRoutingModule {}
