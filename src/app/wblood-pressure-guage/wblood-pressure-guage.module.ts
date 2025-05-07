import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WbloodPressureGuagePageRoutingModule } from './wblood-pressure-guage-routing.module';

import { WbloodPressureGuagePage } from './wblood-pressure-guage.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WbloodPressureGuagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [WbloodPressureGuagePage]
})
export class WbloodPressureGuagePageModule {}
