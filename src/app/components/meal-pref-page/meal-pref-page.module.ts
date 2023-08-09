import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealPrefPagePageRoutingModule } from './meal-pref-page-routing.module';

import { MealPrefPagePage } from './meal-pref-page.page';
// import { ComponentsModule } from '../components.module';
import { MealPrefComponent } from '../meal-pref/meal-pref.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealPrefPagePageRoutingModule
  ],
  declarations: [MealPrefPagePage,MealPrefComponent],
  exports: [MealPrefComponent]
})
export class MealPrefPagePageModule {}
