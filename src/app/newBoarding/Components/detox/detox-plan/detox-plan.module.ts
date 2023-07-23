import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetoxPlanPageRoutingModule } from './detox-plan-routing.module';

import { DetoxPlanPage } from './detox-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetoxPlanPageRoutingModule
  ],
  declarations: [DetoxPlanPage]
})
export class DetoxPlanPageModule {}
