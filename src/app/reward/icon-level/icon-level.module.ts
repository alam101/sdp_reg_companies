import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconLevelPageRoutingModule } from './icon-level-routing.module';

import { IconLevelPage } from './icon-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconLevelPageRoutingModule
  ],
  declarations: [IconLevelPage]
})
export class IconLevelPageModule {}
