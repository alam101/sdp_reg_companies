import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorporateOtpPageRoutingModule } from './corporate-otp-routing.module';

import { CorporateOtpPage } from './corporate-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorporateOtpPageRoutingModule
  ],
  declarations: [CorporateOtpPage]
})
export class CorporateOtpPageModule {}
