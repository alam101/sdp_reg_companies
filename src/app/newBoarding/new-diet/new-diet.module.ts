import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NewDietPageRoutingModule } from "./new-diet-routing.module";
import { CaloriesPageModule } from "../Components/calories/calories.module";
import { MealWorkoutPageModule } from "../Components/meal-workout/meal-workout.module";
import { MealWorkoutCPageModule } from "../Components/meal-workout-c/meal-workout-c.module";

import { NewDietPage } from "./new-diet.page";
import { DetoxPageModule } from "../Components/detox/detox.module";
import { TodaysCalorieCountPageModule } from "../Components/todays-calorie-count/todays-calorie-count.module";
// import { NewCaloriesComponent } from "src/app/components/new-calories/new-calories.component";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ComponentsModule } from "src/app/components/components.module";
import { SearchPageModule } from "src/app/search/search.module";
import { PortionCountPageModule } from "../Components/alternate-diet/portion-count/portion-count.module";
import { AppointentPageModule } from "src/app/appointent/appointent.module";
// import { Tabs1PageModule } from "src/app/tabs1/tabs1.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDietPageRoutingModule,
    CaloriesPageModule,
    MealWorkoutPageModule,
    MealWorkoutCPageModule,
    DetoxPageModule,
    TodaysCalorieCountPageModule,
    NgCircleProgressModule,
    ComponentsModule,
    SearchPageModule,
  PortionCountPageModule,
  AppointentPageModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NewDietPage],
})
export class NewDietPageModule {}
