import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AppointentPageRoutingModule } from "./appointent-routing.module";

import { AppointentPage } from "./appointent.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointentPageRoutingModule,
  ],
  declarations: [AppointentPage],
  exports: [AppointentPage],
})
export class AppointentPageModule {}
