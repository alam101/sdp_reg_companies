import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlotLunchTimePageRoutingModule } from './slot-lunch-time-routing.module';

import { SlotLunchTimePage } from './slot-lunch-time.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlotLunchTimePageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SlotLunchTimePage]
})
export class SlotLunchTimePageModule {}
