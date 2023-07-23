import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Boarding1PageRoutingModule } from './boarding1-routing.module';

import { Boarding1Page } from './boarding1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Boarding1PageRoutingModule
  ],
  declarations: [Boarding1Page]
})
export class Boarding1PageModule {}
