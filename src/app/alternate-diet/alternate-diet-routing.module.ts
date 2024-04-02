import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlternateDietPage } from './alternate-diet.page';

const routes: Routes = [
  {
    path: '',
    component: AlternateDietPage
  },
  {
    path: 'portion-count',
    loadChildren: () => import('./portion-count/portion-count.module').then( m => m.PortionCountPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlternateDietPageRoutingModule {}
