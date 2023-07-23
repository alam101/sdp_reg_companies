
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
  }
];

@NgModule({})

export class AppRoutingModule {}
