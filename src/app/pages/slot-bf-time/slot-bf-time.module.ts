import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlotBfTimePageRoutingModule } from './slot-bf-time-routing.module';

import { SlotBfTimePage } from './slot-bf-time.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlotBfTimePageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SlotBfTimePage]
})
export class SlotBfTimePageModule {}
