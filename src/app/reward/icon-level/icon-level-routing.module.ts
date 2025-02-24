import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconLevelPage } from './icon-level.page';

const routes: Routes = [
  {
    path: '',
    component: IconLevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconLevelPageRoutingModule {}
