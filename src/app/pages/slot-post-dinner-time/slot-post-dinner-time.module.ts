import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlotPostDinnerTimePageRoutingModule } from './slot-post-dinner-time-routing.module';

import { SlotPostDinnerTimePage } from './slot-post-dinner-time.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlotPostDinnerTimePageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SlotPostDinnerTimePage]
})
export class SlotPostDinnerTimePageModule {}
