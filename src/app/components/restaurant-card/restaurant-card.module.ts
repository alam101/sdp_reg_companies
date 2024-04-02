import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RestaurantCardPageRoutingModule } from "./restaurant-card-routing.module";

import { RestaurantCardPage } from "./restaurant-card.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantCardPageRoutingModule,
  ],
  declarations: [RestaurantCardPage],
  exports: [RestaurantCardPage],
})
export class RestaurantCardPageModule {}
