import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardProductPageRoutingModule } from './reward-product-routing.module';

import { RewardProductPage } from './reward-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardProductPageRoutingModule
  ],
  declarations: [RewardProductPage]
})
export class RewardProductPageModule {}
