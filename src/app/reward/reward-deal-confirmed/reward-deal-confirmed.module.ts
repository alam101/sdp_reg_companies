import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardDealConfirmedPageRoutingModule } from './reward-deal-confirmed-routing.module';

import { RewardDealConfirmedPage } from './reward-deal-confirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardDealConfirmedPageRoutingModule
  ],
  declarations: [RewardDealConfirmedPage]
})
export class RewardDealConfirmedPageModule {}
