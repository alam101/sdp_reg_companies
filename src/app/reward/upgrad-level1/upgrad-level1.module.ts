import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpgradLevel1PageRoutingModule } from './upgrad-level1-routing.module';

import { UpgradLevel1Page } from './upgrad-level1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpgradLevel1PageRoutingModule
  ],
  declarations: [UpgradLevel1Page]
})
export class UpgradLevel1PageModule {}
