import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaloryChartPageRoutingModule } from './calory-chart-routing.module';

import { CaloryChartPage } from './calory-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaloryChartPageRoutingModule
  ],
  declarations: [CaloryChartPage]
})
export class CaloryChartPageModule {}
