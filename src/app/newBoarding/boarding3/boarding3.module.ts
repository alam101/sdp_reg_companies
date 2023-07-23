import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Boarding3PageRoutingModule } from './boarding3-routing.module';

import { Boarding3Page } from './boarding3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Boarding3PageRoutingModule
  ],
  declarations: [Boarding3Page]
})
export class Boarding3PageModule {}
