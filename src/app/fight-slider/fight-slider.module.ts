import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FightSliderPageRoutingModule } from './fight-slider-routing.module';

import { FightSliderPage } from './fight-slider.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FightSliderPageRoutingModule
  ],
  declarations: [FightSliderPage]
})
export class FightSliderPageModule {}
