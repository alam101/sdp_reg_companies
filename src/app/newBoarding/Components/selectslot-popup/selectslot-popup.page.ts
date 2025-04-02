import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-selectslot-popup",
  templateUrl: "./selectslot-popup.page.html",
  styleUrls: ["./selectslot-popup.page.scss"],
})
export class SelectslotPopupPage implements OnInit {
  constructor(private modalCtrl: ModalController,private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  slotNumber(slotNumber) {
    this.modalCtrl.dismiss({ slot: slotNumber });
  }
}
