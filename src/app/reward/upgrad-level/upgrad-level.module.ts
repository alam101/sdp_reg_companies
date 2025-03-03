import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpgradLevelPageRoutingModule } from './upgrad-level-routing.module';

import { UpgradLevelPage } from './upgrad-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpgradLevelPageRoutingModule
  ],
  declarations: [UpgradLevelPage]
})
export class UpgradLevelPageModule {}
