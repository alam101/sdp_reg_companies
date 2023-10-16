import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MealWorkoutCPageRoutingModule } from "./meal-workout-c-routing.module";

import { MealWorkoutCPage } from "./meal-workout-c.page";
import { PortionCountPageModule } from "../alternate-diet/portion-count/portion-count.module";
import { ViewProductPageModule } from "../view-product/view-product.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealWorkoutCPageRoutingModule,
    PortionCountPageModule,
    ViewProductPageModule
  ],
  declarations: [MealWorkoutCPage],
  exports: [MealWorkoutCPage],
})
export class MealWorkoutCPageModule {}
