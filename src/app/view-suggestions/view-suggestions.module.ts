import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ViewSuggestionsPageRoutingModule } from "./view-suggestions-routing.module";

import { ViewSuggestionsPage } from "./view-suggestions.page";
import { FilterCardPageModule } from "../components/filter-card/filter-card.module";
import { RestaurantCardPageModule } from "../components/restaurant-card/restaurant-card.module";
import { SmallMealCardPageModule } from "../components/small-meal-card/small-meal-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSuggestionsPageRoutingModule,
    FilterCardPageModule,
    RestaurantCardPageModule,
    SmallMealCardPageModule,
  ],
  declarations: [ViewSuggestionsPage],
})
export class ViewSuggestionsPageModule {}
