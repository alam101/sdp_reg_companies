import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlotDinnerTimePageRoutingModule } from './slot-dinner-time-routing.module';

import { SlotDinnerTimePage } from './slot-dinner-time.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressComponent } from '../progress/progress.component';
import { CloseProfileComponent } from '../close-profile/close-profile.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlotDinnerTimePageRoutingModule,
    TranslateModule,
    ComponentsModule
  ],
  declarations: [ProgressComponent,CloseProfileComponent,SlotDinnerTimePage]
})
export class SlotDinnerTimePageModule {}
