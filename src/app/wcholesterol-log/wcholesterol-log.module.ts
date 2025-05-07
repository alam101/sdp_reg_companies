import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WcholesterolLogPageRoutingModule } from './wcholesterol-log-routing.module';

import { WcholesterolLogPage } from './wcholesterol-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WcholesterolLogPageRoutingModule
  ],
  declarations: [WcholesterolLogPage]
})
export class WcholesterolLogPageModule {}
