import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalBoardingPage } from './final-boarding.page';

const routes: Routes = [
  {
    path: '',
    component: FinalBoardingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalBoardingPageRoutingModule {}
