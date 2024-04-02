import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterSortPageRoutingModule } from './filter-sort-routing.module';

import { FilterSortPage } from './filter-sort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterSortPageRoutingModule
  ],
  declarations: [FilterSortPage]
})
export class FilterSortPageModule {}
