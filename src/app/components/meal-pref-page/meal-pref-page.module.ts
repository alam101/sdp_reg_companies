import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealPrefPagePageRoutingModule } from './meal-pref-page-routing.module';

import { MealPrefPagePage } from './meal-pref-page.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MealPrefPagePageRoutingModule
  ],
  declarations: [MealPrefPagePage]
})
export class MealPrefPagePageModule {}
