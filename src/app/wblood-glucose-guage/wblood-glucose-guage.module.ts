import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WbloodGlucoseGuagePageRoutingModule } from './wblood-glucose-guage-routing.module';

import { WbloodGlucoseGuagePage } from './wblood-glucose-guage.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WbloodGlucoseGuagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [WbloodGlucoseGuagePage]
})
export class WbloodGlucoseGuagePageModule {}
