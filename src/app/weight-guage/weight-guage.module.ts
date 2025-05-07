import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightGuagePageRoutingModule } from './weight-guage-routing.module';

import { WeightGuagePage } from './weight-guage.page';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightGuagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [WeightGuagePage]
})
export class WeightGuagePageModule {}
