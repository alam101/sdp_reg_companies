import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MealWorkoutPageRoutingModule } from "./meal-workout-routing.module";

import { MealWorkoutPage } from "./meal-workout.page";
import { PortionCountPageModule } from "../alternate-diet/portion-count/portion-count.module";
import { ViewProductPageModule } from "../view-product/view-product.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealWorkoutPageRoutingModule,
    PortionCountPageModule,
    ViewProductPageModule
  ],
  declarations: [MealWorkoutPage],
  exports: [MealWorkoutPage],
})
export class MealWorkoutPageModule {}
