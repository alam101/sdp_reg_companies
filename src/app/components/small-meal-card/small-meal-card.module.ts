import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SmallMealCardPageRoutingModule } from "./small-meal-card-routing.module";

import { SmallMealCardPage } from "./small-meal-card.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmallMealCardPageRoutingModule,
  ],
  declarations: [SmallMealCardPage],
  exports: [SmallMealCardPage],
})
export class SmallMealCardPageModule {}
