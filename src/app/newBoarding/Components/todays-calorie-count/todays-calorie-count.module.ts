import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TodaysCalorieCountPageRoutingModule } from "./todays-calorie-count-routing.module";

import { TodaysCalorieCountPage } from "./todays-calorie-count.page";
import { OptionsComponent } from "./componets/options.component";
import { NgCircleProgressModule } from "ng-circle-progress";
import { CaloriesCounterInfoComponent } from "../calories-counter-info/calories-counter-info.component";
// import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodaysCalorieCountPageRoutingModule,
    // ComponentsModule,
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
  declarations: [OptionsComponent, TodaysCalorieCountPage,CaloriesCounterInfoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TodaysCalorieCountPageModule {}
