import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MealWorkoutPageRoutingModule } from "./meal-workout-routing.module";

import { MealWorkoutPage } from "./meal-workout.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealWorkoutPageRoutingModule,
  ],
  declarations: [MealWorkoutPage],
  exports: [MealWorkoutPage],
})
export class MealWorkoutPageModule {}
