import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { UTILITIES } from "../../core/utility/utilities";

@Component({
  selector: 'app-calories-counter-info',
  templateUrl: './calories-counter-info.component.html',
  styleUrls: ['./calories-counter-info.component.scss'],
})
export class CaloriesCounterInfoComponent implements OnInit {
  guranteeData;
  constructor(public modalController: ModalController,
    private utilities: UTILITIES,) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }
}
