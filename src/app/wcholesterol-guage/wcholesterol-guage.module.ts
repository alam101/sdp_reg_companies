import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WcholesterolGuagePageRoutingModule } from './wcholesterol-guage-routing.module';

import { WcholesterolGuagePage } from './wcholesterol-guage.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WcholesterolGuagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [WcholesterolGuagePage]
})
export class WcholesterolGuagePageModule {}
