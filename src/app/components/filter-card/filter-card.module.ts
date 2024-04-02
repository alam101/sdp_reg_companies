import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FilterCardPageRoutingModule } from "./filter-card-routing.module";

import { FilterCardPage } from "./filter-card.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterCardPageRoutingModule,
  ],
  declarations: [FilterCardPage],
  exports: [FilterCardPage],
})
export class FilterCardPageModule {}
