import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingGoalsComponent } from './landing-goals/landing-goals.component';
import { UserVitalsComponent } from './user-vitals/user-vitals.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { SelectInfoComponent } from './select-info/select-info.component';
import { ActivityMainComponent } from './activity-main/activity-main.component';
import { VerticalDietplanComponent } from './vertical-dietplan/vertical-dietplan.component';
import { OptionsComponent } from './options/options.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { AnalysisComponent } from './analysis/analysis.component';
// import { GaugeChartModule } from 'angular-gauge-chart';
import { FightSliderPageModule } from '../fight-slider/fight-slider.module';

import {
  TranslateModule,
  TranslateLoader,
  TranslateStore,
  TranslateService
} from "@ngx-translate/core";

@NgModule({
  declarations: [LandingGoalsComponent,UserVitalsComponent, SelectInfoComponent, 
    ActivityMainComponent,VerticalDietplanComponent,OptionsComponent,
    FoodDetailsComponent,AnalysisComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FightSliderPageModule,
    IonicModule.forRoot(),
    // GaugeChartModule,
    TranslateModule.forChild()
  ],
  providers:[ TranslateStore,TranslateService,TranslateModule,TranslateService],
  exports:[LandingGoalsComponent,UserVitalsComponent,SelectInfoComponent,
    ActivityMainComponent,VerticalDietplanComponent,OptionsComponent
    ,FoodDetailsComponent,AnalysisComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PageModule { }
