import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchPageRoutingModule } from "./search-routing.module";

import { SearchPage } from "./search.page";
import { SmallMealCardPageModule } from "../components/small-meal-card/small-meal-card.module";
import { RestaurantCardPageModule } from "../components/restaurant-card/restaurant-card.module";
import { PortionCountPageModule } from "../alternate-diet/portion-count/portion-count.module";
import { ViewSuggestionsPageModule } from "../view-suggestions/view-suggestions.module";
import { ViewRestaurantPageModule } from "../view-restaurant/view-restaurant.module";
import { FilterCardPageModule } from "../components/filter-card/filter-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    SmallMealCardPageModule,
    RestaurantCardPageModule,
    PortionCountPageModule,
    ViewSuggestionsPageModule,
    ViewRestaurantPageModule,
    FilterCardPageModule
    ],
  declarations: [SearchPage],
})
export class SearchPageModule {}
