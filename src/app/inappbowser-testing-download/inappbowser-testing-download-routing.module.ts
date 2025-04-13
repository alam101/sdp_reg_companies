import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InappbowserTestingDownloadPage } from './inappbowser-testing-download.page';

const routes: Routes = [
  {
    path: '',
    component: InappbowserTestingDownloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InappbowserTestingDownloadPageRoutingModule {}
