import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Boarding4PageRoutingModule } from './boarding4-routing.module';

import { Boarding4Page } from './boarding4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Boarding4PageRoutingModule
  ],
  declarations: [Boarding4Page]
})
export class Boarding4PageModule {}
