import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SelectslotPopupPageRoutingModule } from "./selectslot-popup-routing.module";
import { SelectslotPopupPage } from "./selectslot-popup.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectslotPopupPageRoutingModule,
  ],
  declarations: [SelectslotPopupPage],
})
export class SelectslotPopupPageModule {}
