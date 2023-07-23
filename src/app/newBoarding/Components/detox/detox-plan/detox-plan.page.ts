import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-detox-plan",
  templateUrl: "./detox-plan.page.html",
  styleUrls: ["./detox-plan.page.scss"],
})
export class DetoxPlanPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

  doActivate(type, plan) {
    const data = {
      type,
      plan,
    };
    this.modalCtrl.dismiss(data);
  }
}
