import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlternateDietPageRoutingModule } from './alternate-diet-routing.module';

import { AlternateDietPage } from './alternate-diet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlternateDietPageRoutingModule
  ],
  declarations: [AlternateDietPage]
})
export class AlternateDietPageModule {}
