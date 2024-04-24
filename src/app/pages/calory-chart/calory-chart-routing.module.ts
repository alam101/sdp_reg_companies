import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaloryChartPage } from './calory-chart.page';

const routes: Routes = [
  {
    path: '',
    component: CaloryChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaloryChartPageRoutingModule {}
