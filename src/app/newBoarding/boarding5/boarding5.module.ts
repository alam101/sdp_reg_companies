import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Boarding5PageRoutingModule } from './boarding5-routing.module';

import { Boarding5Page } from './boarding5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Boarding5PageRoutingModule
  ],
  declarations: [Boarding5Page]
})
export class Boarding5PageModule {}
