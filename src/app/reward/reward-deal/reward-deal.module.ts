import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardDealPageRoutingModule } from './reward-deal-routing.module';

import { RewardDealPage } from './reward-deal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardDealPageRoutingModule
  ],
  declarations: [RewardDealPage]
})
export class RewardDealPageModule {}
