import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortionCountPageRoutingModule } from './portion-count-routing.module';

import { PortionCountPage } from './portion-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortionCountPageRoutingModule
  ],
  declarations: [PortionCountPage]
})
export class PortionCountPageModule {}
