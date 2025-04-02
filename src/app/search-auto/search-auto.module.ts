import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchAutoPageRoutingModule } from './search-auto-routing.module';

import { SearchAutoPage } from './search-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchAutoPageRoutingModule
  ],
  declarations: [SearchAutoPage]
})
export class SearchAutoPageModule {}
