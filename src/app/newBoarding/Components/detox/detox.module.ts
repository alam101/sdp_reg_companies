import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DetoxPageRoutingModule } from "./detox-routing.module";

import { DetoxPage } from "./detox.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DetoxPageRoutingModule],
  declarations: [DetoxPage],
  exports: [DetoxPage],
})
export class DetoxPageModule {}
