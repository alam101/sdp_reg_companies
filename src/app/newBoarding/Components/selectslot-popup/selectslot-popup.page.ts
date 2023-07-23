import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-selectslot-popup",
  templateUrl: "./selectslot-popup.page.html",
  styleUrls: ["./selectslot-popup.page.scss"],
})
export class SelectslotPopupPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  slotNumber(slotNumber) {
    this.modalCtrl.dismiss({ slot: slotNumber });
  }
}
