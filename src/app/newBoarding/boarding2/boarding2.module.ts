import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Boarding2PageRoutingModule } from './boarding2-routing.module';

import { Boarding2Page } from './boarding2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Boarding2PageRoutingModule
  ],
  declarations: [Boarding2Page]
})
export class Boarding2PageModule {}
