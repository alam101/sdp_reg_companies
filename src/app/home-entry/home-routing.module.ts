/*
 * Copyright (c) 2021 Siemens Healthcare Diagnostics
 * All rights are reserved. Reproduction or transmission in whole or in part,
 * in any form or by any means, electronic, mechanical or otherwise,
 * is prohibited without the prior written consent of the copyright owner.
 */
/** Angular library */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePlanComponent } from '../components/change-plan/change-plan.component';
import { FightSliderPage } from '../fight-slider/fight-slider.page';
import { ActivityMainComponent } from '../pages/activity-main/activity-main.component';
import { AnalysisComponent } from '../pages/analysis/analysis.component';
import { FoodDetailsComponent } from '../pages/food-details/food-details.component';
import { LandingGoalsComponent } from '../pages/landing-goals/landing-goals.component';
import { OptionsComponent } from '../pages/options/options.component';
import { ReadQueryComponent } from '../pages/read-query/read-query.component';
import { SelectInfoComponent } from '../pages/select-info/select-info.component';
import { UserVitalsComponent } from '../pages/user-vitals/user-vitals.component';
import { VerticalDietplanComponent } from '../pages/vertical-dietplan/vertical-dietplan.component';
import { AuthGuard } from '../services/auth.guard.service';
import { ComponentsComponent } from './components/components.component';
const routes: Routes = [

    {
      // /** Display HomeComponent if path is home */
      path: '',
      component: ComponentsComponent,
      // // canActivateChild: [AuthGuardService],
      children:[
        {
          path:'',
          component:FightSliderPage,
        //  canActivate: [AuthGuard]
        },
        {
          path:'read',
          component:ReadQueryComponent,
        //  canActivate: [AuthGuard]
        },
        {
          path:'landing',
          component:LandingGoalsComponent,
            canActivate: [AuthGuard]
        },
        {
          path:'vitals',
          component:UserVitalsComponent,
         canActivate: [AuthGuard]
        },
        {
          path:'activity',
          component:ActivityMainComponent,
         canActivate: [AuthGuard]
        },
        {
          path:'user-info',
          component:SelectInfoComponent,
         canActivate: [AuthGuard]
        },
        {
          path:'dietplan',
          component:VerticalDietplanComponent,
       //   canActivate: [AuthGuard]
        },
        {
          path:'options',
          component:OptionsComponent,
       //   canActivate: [AuthGuard]
        },
        {
          path:'food-detail',
          component:FoodDetailsComponent
        },
        {
          path:'analysis',
          component:AnalysisComponent
        },
        {
          path:'change-plan',
          component:ChangePlanComponent
        }


      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
