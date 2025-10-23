import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";
// import { IonIntlTelInputModule } from 'ion-intl-tel-input';
import { FooterComponent } from "./footer/footer.component";
import { GoalComponent } from "./goal/goal.component";
import { ButtonComponent } from "./button/button.component";
import { VitalsComponent } from "./vitals/vitals.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { BackComponent } from "./back/back.component";
import { ButtonPreviousComponent } from "./button-previous/button-previous.component";
import { HomeDietplanComponent } from "./home-dietplan/home-dietplan.component";
import { HomeKcounterComponent } from "./home-kcounter/home-kcounter.component";
import { HomeVerticalComponent } from "./home-vertical/home-vertical.component";
import { HomeWaterComponent } from "./home-water/home-water.component";
import { RecipeDayComponent } from "./recipe-day/recipe-day.component";
import { TermComponent } from "./term/term.component";
import { ActivityComponent } from "./activity/activity.component";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProteinTrackerComponent } from "./protein-tracker/protein-tracker.component";
import { ChangePlanComponent } from "./change-plan/change-plan.component";
import { SelectPlanPopupComponent } from "./select-plan-popup/select-plan-popup.component";
import { DownloadPopupComponent } from "./download-popup/download-popup.component";
 import { NewCaloriesComponent } from "./new-calories/new-calories.component";
import { PremiumComponentComponent } from "./premium-component/premium-component.component";
import { LoginComponent } from "./login/login.component";
// import {MealPrefComponent} from "./meal-pref/meal-pref.component";
import { MealSelectedComponent } from "./meal-selected/meal-selected.component";
import { MealSelectedInnerComponent } from "./meal-selected-inner/meal-selected-inner.component";
import { WeightShowComponent } from "./weight-show/weight-show.component";
import { WbloodPressureComponent } from "./wblood-pressure/wblood-pressure.component";
import { WbloodGlucoseComponent } from "./wblood-glucose/wblood-glucose.component";
import { WcholesterolComponent } from "./wcholesterol/wcholesterol.component";
import { ChatComponent } from "./chat/chat.component";
import { NutritionComponent } from "./nutrition/nutrition.component";
import { OpenCameraComponent } from "./open-camera/open-camera.component";
import {AiChatComponent} from './ai-chat/ai-chat.component';
import { AiDietRecallSummaryComponent } from "./ai-diet-recall-summary/ai-diet-recall-summary.component";
@NgModule({
  declarations: [
    ButtonPreviousComponent,
    HeaderComponent,
    FooterComponent,
    GoalComponent,
    ButtonComponent,
    VitalsComponent,
    UserInfoComponent,
    BackComponent,
    HomeDietplanComponent,
    HomeKcounterComponent,
    HomeVerticalComponent,
    HomeWaterComponent,
    RecipeDayComponent,
    TermComponent,
    ActivityComponent,
    ProteinTrackerComponent,
    ChangePlanComponent,
    SelectPlanPopupComponent,
    DownloadPopupComponent,
     NewCaloriesComponent,
    PremiumComponentComponent,
    LoginComponent,
    // MealPrefComponent,
    MealSelectedComponent,
    MealSelectedInnerComponent,
    WeightShowComponent,
    WbloodPressureComponent,
    WbloodGlucoseComponent,
    WcholesterolComponent,
    ChatComponent,
    OpenCameraComponent,
   NutritionComponent,
   AiChatComponent,
   AiDietRecallSummaryComponent
  ],
  imports: [
    // IonIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    IonicModule.forRoot(),NgCircleProgressModule.forRoot({
    animation:false,
    radius:49,
    innerStrokeWidth:6,
    outerStrokeWidth:6,
    space:-6,
    responsive: false,
    showTitle: true,
    titleFontSize:"15",
    subtitleFontSize:"15",
    unitsFontSize:"15",
    renderOnClick:false
  })],
  exports: [
    ButtonPreviousComponent,
    HeaderComponent,
    FooterComponent,
    GoalComponent,
    ButtonComponent,
    VitalsComponent,
    UserInfoComponent,
    BackComponent,
    HomeDietplanComponent,
    HomeKcounterComponent,
    HomeVerticalComponent,
    HomeWaterComponent,
    RecipeDayComponent,
    TermComponent,
    ActivityComponent,
    ProteinTrackerComponent,
    ChangePlanComponent,
    SelectPlanPopupComponent,
    DownloadPopupComponent,
    NewCaloriesComponent,
    PremiumComponentComponent,
    LoginComponent,
    // MealPrefComponent,
    MealSelectedComponent,
    MealSelectedInnerComponent,
    WeightShowComponent,
    WbloodPressureComponent,
    WbloodGlucoseComponent,
    WcholesterolComponent,
    ChatComponent,
    NutritionComponent,
    OpenCameraComponent,
    AiChatComponent,
    AiDietRecallSummaryComponent
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
