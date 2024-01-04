import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PortionCountPageRoutingModule } from "./portion-count-routing.module";

import { PortionCountPage } from "./portion-count.page";
import { SmallMealCardPageModule } from "../../small-meal-card/small-meal-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortionCountPageRoutingModule,
    SmallMealCardPageModule
  ],
  declarations: [PortionCountPage],
})
export class PortionCountPageModule {}
