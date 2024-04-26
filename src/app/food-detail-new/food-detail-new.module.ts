import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDetailNewPageRoutingModule } from './food-detail-new-routing.module';

import { FoodDetailNewPage } from './food-detail-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDetailNewPageRoutingModule
  ],
  declarations: [FoodDetailNewPage]
})
export class FoodDetailNewPageModule {}
