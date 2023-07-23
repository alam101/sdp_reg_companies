import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalBoardingPageRoutingModule } from './final-boarding-routing.module';

import { FinalBoardingPage } from './final-boarding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalBoardingPageRoutingModule
  ],
  declarations: [FinalBoardingPage]
})
export class FinalBoardingPageModule {}
