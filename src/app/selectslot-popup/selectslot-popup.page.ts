import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-selectslot-popup",
  templateUrl: "./selectslot-popup.page.html",
  styleUrls: ["./selectslot-popup.page.scss"],
})
export class SelectslotPopupPage implements OnInit {
  plandata: any = {};

  constructor(
    private modalCtrl: ModalController,
    private appServices: AppService
  ) {}

  ngOnInit() {
    this.checkPlan();
  }

  checkPlan() {
    this.appServices.getOnePlan().then((res) => {
      this.plandata = res;
      let exp: any = new Date(this.plandata.planExpiryDate).getTime();
      let newDate: any = new Date().getTime();
      console.log(exp, newDate);

      // if (this.plandata.planType?.toLowerCase()==='premium') {
      //   this.plandata.isPlanActive = true;
      // }
      // this.plandata.isPlanActive = true;
      console.log("plan==========>", res);
    });
  }

  slotNumber(slotNumber) {
    this.modalCtrl.dismiss({ slot: slotNumber });
  }
}
