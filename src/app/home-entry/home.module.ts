/*
 * Copyright (c) 2021 Siemens Healthcare Diagnostics
 * All rights are reserved. Reproduction or transmission in whole or in part,
 * in any form or by any means, electronic, mechanical or otherwise,
 * is prohibited without the prior written consent of the copyright owner.
 */

/** Angular and third part libraries */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
/** Application files */


/** Handle routes in the Homescreen */
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsComponent } from './components/components.component';
import { ComponentsModule } from '../components/components.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Utilities } from '../services/utilities.service';
import { PageModule } from '../pages/page.module';
import { HttpClientModule } from '@angular/common/http';
import { FightSliderPageModule } from '../fight-slider/fight-slider.module';

@NgModule({
  declarations: [
 
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    HttpClientModule,
    PageModule,
    FightSliderPageModule,
    IonicStorageModule.forRoot({
      name: "__mydb"})
  ],
  providers: [RouterModule, Utilities
   ],
  exports: [],
  // HomeComponent, HomeMainComponent, HomePaginationComponent
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
/** Module name */
export class HomeModule {
  constructor() {
    
  }
 
}

