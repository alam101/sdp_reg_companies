import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NewDietPageRoutingModule } from "./new-diet-routing.module";
import { CaloriesPageModule } from "../Components/calories/calories.module";
import { MealWorkoutPageModule } from "../Components/meal-workout/meal-workout.module";

import { NewDietPage } from "./new-diet.page";
import { DetoxPageModule } from "../Components/detox/detox.module";
import { TodaysCalorieCountPageModule } from "../Components/todays-calorie-count/todays-calorie-count.module";
// import { NewCaloriesComponent } from "src/app/components/new-calories/new-calories.component";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ComponentsModule } from "src/app/components/components.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDietPageRoutingModule,
    CaloriesPageModule,
    MealWorkoutPageModule,
    DetoxPageModule,
    TodaysCalorieCountPageModule,
    NgCircleProgressModule,
    ComponentsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NewDietPage],
})
export class NewDietPageModule {}
