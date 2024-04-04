import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ViewRestaurantPageRoutingModule } from "./view-restaurant-routing.module";

import { ViewRestaurantPage } from "./view-restaurant.page";
import { FilterCardPageModule } from "../components/filter-card/filter-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRestaurantPageRoutingModule,
    FilterCardPageModule,
  ],
  declarations: [ViewRestaurantPage],
})
export class ViewRestaurantPageModule {}
