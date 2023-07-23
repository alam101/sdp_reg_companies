import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CaloriesPageRoutingModule } from "./calories-routing.module";

import { CaloriesPage } from "./calories.page";
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaloriesPageRoutingModule,
    NgCircleProgressModule.forRoot({
      animation: false,
      radius: 49,
      innerStrokeWidth: 6,
      outerStrokeWidth: 6,
      space: -6,
      responsive: false,
      showTitle: true,
      titleFontSize: "15",
      subtitleFontSize: "15",
      unitsFontSize: "15",
      renderOnClick: false,
    }),
  ],
  declarations: [CaloriesPage],
  exports: [CaloriesPage],
})
export class CaloriesPageModule {}
