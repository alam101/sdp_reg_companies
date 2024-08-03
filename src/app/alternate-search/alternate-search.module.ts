import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AlternateSearchPageRoutingModule } from "./alternate-search-routing.module";

import { AlternateSearchPage } from "./alternate-search.page";
import { MealWorkoutPageModule } from "../newBoarding/Components/meal-workout/meal-workout.module"; ////meal-workout/meal-workout.module

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlternateSearchPageRoutingModule,
    MealWorkoutPageModule,
  ],
  declarations: [AlternateSearchPage],
})
export class AlternateSearchPageModule {}
