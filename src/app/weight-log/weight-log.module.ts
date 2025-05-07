import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightLogPageRoutingModule } from './weight-log-routing.module';

import { WeightLogPage } from './weight-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightLogPageRoutingModule
  ],
  declarations: [WeightLogPage]
})
export class WeightLogPageModule {}
