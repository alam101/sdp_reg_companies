import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WbloodPressureLogPageRoutingModule } from './wblood-pressure-log-routing.module';

import { WbloodPressureLogPage } from './wblood-pressure-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WbloodPressureLogPageRoutingModule
  ],
  declarations: [WbloodPressureLogPage]
})
export class WbloodPressureLogPageModule {}
