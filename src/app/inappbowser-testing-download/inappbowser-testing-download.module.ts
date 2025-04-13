import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InappbowserTestingDownloadPageRoutingModule } from './inappbowser-testing-download-routing.module';

import { InappbowserTestingDownloadPage } from './inappbowser-testing-download.page';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InappbowserTestingDownloadPageRoutingModule
  ],
  providers: [InAppBrowser],
  declarations: [InappbowserTestingDownloadPage]
})
export class InappbowserTestingDownloadPageModule {}
