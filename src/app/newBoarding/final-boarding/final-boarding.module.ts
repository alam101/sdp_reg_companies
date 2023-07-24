import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalBoardingPageRoutingModule } from './final-boarding-routing.module';

import { FinalBoardingPage } from './final-boarding.page';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalBoardingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FinalBoardingPage]
})
export class FinalBoardingPageModule {}
