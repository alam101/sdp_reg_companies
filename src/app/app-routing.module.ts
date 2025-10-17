
import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { FightSliderPage } from './fight-slider/fight-slider.page';
export const APP_ROUTES: Routes = [
  {
    path:'',
    loadChildren: () => import('./home-entry/home.module').then( m => m.HomeModule)
  
  },
  {
    path: 'fight-slider',
    component:FightSliderPage
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'boarding1',
    loadChildren: () => import('./newBoarding/boarding1/boarding1.module').then( m => m.Boarding1PageModule)
  },
  {
    path: 'boarding',
    loadChildren: () => import('./newBoarding/boarding/boarding.module').then( m => m.BoardingPageModule)
  },
  {
    path: 'boarding1',
    loadChildren: () => import('./newBoarding/boarding1/boarding1.module').then( m => m.Boarding1PageModule)
  },
  {
    path: 'boarding2',
    loadChildren: () => import('./newBoarding/boarding2/boarding2.module').then( m => m.Boarding2PageModule)
  },
  {
    path: 'boarding3',
    loadChildren: () => import('./newBoarding/boarding3/boarding3.module').then( m => m.Boarding3PageModule)
  },
  {
    path: 'boarding4',
    loadChildren: () => import('./newBoarding/boarding4/boarding4.module').then( m => m.Boarding4PageModule)
  },
  {
    path: 'boarding5',
    loadChildren: () => import('./newBoarding/boarding5/boarding5.module').then( m => m.Boarding5PageModule)
  },
  {
    path: 'final-boarding',
    loadChildren: () => import('./newBoarding/final-boarding/final-boarding.module').then( m => m.FinalBoardingPageModule)
  },
  {
    path: 'new-profile',
    loadChildren: () => import('./newBoarding/new-profile/new-profile.module').then( m => m.NewProfilePageModule)
  },
  {
    path: 'new-diet',
    loadChildren: () => import('./newBoarding/new-diet/new-diet.module').then( m => m.NewDietPageModule)
  },
  {
    path: 'premium',
    loadChildren: () => import('./newBoarding/premium/premium.module').then( m => m.PremiumPageModule)
  },
  {
    path: "todays-calorie-count",
    loadChildren: () =>
      import("./newBoarding/Components/todays-calorie-count/todays-calorie-count.module").then((m)=>m.TodaysCalorieCountPageModule),
  },
  {
    path: "slot-dinner-time",
    loadChildren: () =>
      import("../app/pages/slot-dinner-time/slot-dinner-time.module").then(
        (m) => m.SlotDinnerTimePageModule
      )
  },
  {
    path: "slot-post-dinner-time",
    loadChildren: () =>
      import("../app/pages/slot-post-dinner-time/slot-post-dinner-time.module").then(
        (m) => m.SlotPostDinnerTimePageModule
      )
  },
  {
    path: "slot-bf-time",
    loadChildren: () =>
      import("../app/pages/slot-bf-time/slot-bf-time.module").then(
        (m) => m.SlotBfTimePageModule
      )
  },
  {
    path: "slot-lunch-time",
    loadChildren: () =>
      import("../app/pages/slot-lunch-time/slot-lunch-time.module").then(
        (m) => m.SlotLunchTimePageModule
      )
  },
  {
    path: "meal-pref",
    loadChildren: () =>
      import("../app/components/meal-pref-page/meal-pref-page.module").then(
        (m) => m.MealPrefPagePageModule
      )
  },

  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'search-auto',
    loadChildren: () => import('./search-auto/search-auto.module').then( m => m.SearchAutoPageModule)
  },
  {
    path: 'selectslot-popup',
    loadChildren: () => import('./selectslot-popup/selectslot-popup.module').then( m => m.SelectslotPopupPageModule)
  },
  {
    path: 'view-product',
    loadChildren: () => import('./view-product/view-product.module').then( m => m.ViewProductPageModule)
  },
  {
    path: 'view-suggestions',
    loadChildren: () => import('./view-suggestions/view-suggestions.module').then( m => m.ViewSuggestionsPageModule)
  },
  {
    path: 'alternate-diet',
    loadChildren: () => import('./alternate-diet/alternate-diet.module').then( m => m.AlternateDietPageModule)
  },
  {
    path: 'alternate-search',
    loadChildren: () => import('./alternate-search/alternate-search.module').then( m => m.AlternateSearchPageModule)
  },
  {
    path: 'filter-card',
    loadChildren: () => import('./components/filter-card/filter-card.module').then( m => m.FilterCardPageModule)
  },
  {
    path: 'restaurant-card',
    loadChildren: () => import('./components/restaurant-card/restaurant-card.module').then( m => m.RestaurantCardPageModule)
  },
  {
    path: 'small-meal-card',
    loadChildren: () => import('./components/small-meal-card/small-meal-card.module').then( m => m.SmallMealCardPageModule)
  },
  // {
  //   path: 'meal-workout',
  //   loadChildren: () => import('./components/meal-workout/meal-workout.module').then( m => m.MealWorkoutPageModule)
  // },
  {
    path: 'calory-chart',
    loadChildren: () => import('./pages/calory-chart/calory-chart.module').then( m => m.CaloryChartPageModule)
  },
  {
    path: 'corporate-otp',
    loadChildren: () => import('./pages/corporate-otp/corporate-otp.module').then( m => m.CorporateOtpPageModule)
  },
  {
    path: 'termsandconditions',
    loadChildren: () => import('./termsandconditions/termsandconditions.module').then( m => m.TermsandconditionsPageModule)
  },
  {
    path: 'dietitian-profile',
    loadChildren: () => import('./dietitian-profile/dietitian-profile.module').then( m => m.DietitianProfilePageModule)
  },
  {
    path: 'appinfo',
    loadChildren: () => import('./appinfo/appinfo.module').then( m => m.AppinfoPageModule)
  },
  {
    path: 'reward-level',
    loadChildren: () => import('./reward/icon-level/icon-level.module').then( m => m.IconLevelPageModule)
  },
  {
    path: 'upgrad-level',
    loadChildren: () => import('./reward/upgrad-level/upgrad-level.module').then( m => m.UpgradLevelPageModule)
  },
  {
    path: 'upgrad-level1',
    loadChildren: () => import('./reward/upgrad-level1/upgrad-level1.module').then( m => m.UpgradLevel1PageModule)
  },
  {
    path: 'how-works',
    loadChildren: () => import('./reward/how-it-works/how-it-works.module').then( m => m.HowItWorksPageModule)
  },
  {
    path: 'reward-product',
    loadChildren: () => import('./reward/reward-product/reward-product.module').then( m => m.RewardProductPageModule)
  },
  {
    path: 'reward-deal',
    loadChildren: () => import('./reward/reward-deal/reward-deal.module').then( m => m.RewardDealPageModule)
  },
  {
    path: 'reward-deal-confirmed',
    loadChildren: () => import('./reward/reward-deal-confirmed/reward-deal-confirmed.module').then( m => m.RewardDealConfirmedPageModule)
  },
  {
    path: 'inapp-test',
    loadChildren: () => import('./inappbowser-testing-download/inappbowser-testing-download.module').then( m => m.InappbowserTestingDownloadPageModule)
  },
  {
    path: 'weight-guage',
    loadChildren: () => import('./weight-guage/weight-guage.module').then( m => m.WeightGuagePageModule)
  },
  {
    path: 'blood-pressure-guage',
    loadChildren: () => import('./wblood-pressure-guage/wblood-pressure-guage.module').then( m => m.WbloodPressureGuagePageModule)
  },
  {
    path: 'blood-glucose-guage',
    loadChildren: () => import('./wblood-glucose-guage/wblood-glucose-guage.module').then( m => m.WbloodGlucoseGuagePageModule)
  },
  {
    path: 'cholesterol-guage',
    loadChildren: () => import('./wcholesterol-guage/wcholesterol-guage.module').then( m => m.WcholesterolGuagePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat-bot/chat-bot.module').then( m => m.ChatBotPageModule)
  },
   
  {
    path: 'food-choice',
    loadChildren: () => import('./food-choice/food-choice.module').then( m => m.FoodChoicePageModule)
  }
];

@NgModule({})

export class AppRoutingModule {}
