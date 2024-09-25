import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietitianProfilePageRoutingModule } from './dietitian-profile-routing.module';

import { DietitianProfilePage } from './dietitian-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietitianProfilePageRoutingModule
  ],
  declarations: [DietitianProfilePage]
})
export class DietitianProfilePageModule {}
