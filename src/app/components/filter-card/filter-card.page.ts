import { Location } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";

import moment from "moment";
import { AppService } from "src/app/app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { PortionCountPage } from "../../alternate-diet/portion-count/portion-count.page";
import { SelectslotPopupPage } from "../../selectslot-popup/selectslot-popup.page";
import { ViewProductPage } from "../../view-product/view-product.page";

@Component({
  selector: "app-filter-card",
  templateUrl: "./filter-card.page.html",
  styleUrls: ["./filter-card.page.scss"],
})
export class FilterCardPage implements OnInit {
  @Input() data: any = {};
  @Input() loaded = false;
  @Input() slot = false;
  customerId: any;
  totalCal: number = 0;
  moment: any = moment;
  parseFloat: any = parseFloat;
  Math: any = Math;
  image_URL = "";
  currentDateIndex: any = 0;

  constructor(
    private utilities: UTILITIES,
    private appServices: AppService,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    this.image_URL = CONSTANTS.image_URL;
    this.customerId = await this.utilities.getUserData("id");
    if (this.data.Score === 9) {
      this.data.option = "Best";
    }
    if (this.data.Score === 6) {
      this.data.option = "Good";
    }
    if (this.data.Score === 3) {
      this.data.option = "Average";
    }
    if (this.data.Score === 1) {
      this.data.option = "Below average";
    }
    if (this.data.Score === 0) {
      this.data.option = "Bad";
    }
    if (this.data.Score === -1) {
      this.data.option = "Not recommended";
    }
    if (!this.data.Score || this.data.Score == "") {
      this.data.option = "Unverified";
    }
    // console.log(this.slot);
  }

  async addCal(d) {
    if (this.slot) {
      const modal = await this.modalCtrl.create({
        component: PortionCountPage,
        cssClass: "portion_count",
        componentProps: {
          alterdata: this.data,
          type: "add",
        },
        backdropDismiss: true,
        swipeToClose: true,
      });
      await modal.present();
      const modaldata = await modal.onDidDismiss();
      const d = modaldata?.data;
      console.log(d);
      if (d) {
        const datas = {
          date: CONSTANTS.dietDate,
          foodCodeList: [
            {
              code: d._id,
              portion: Number(d.portion),
              eaten: 2,

              foodSource: d.foodSource,
            },
          ],
          slot: Number(this.slot),
          isUpdateDiet: true,
        };
        console.log("datas", datas);
        this.appServices.postOptionFoodList1(datas).then(
          (res) => {
            console.log("food code update", res);
            // this.modalCtrl.dismiss({});
            // if (d?.imgType === "H") {
            //   this.utilities.logEvent("Click_search_whats_on_your_mind", {});
            // } else

            this.utilities.closeModal();
            this.navCtrl.navigateForward([
              "/new-diet",
              { refresh: new Date().getTime() },
            ]);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      console.log("slot", this.slot);
      return;
    }
    this.data = d;
    console.log("TEST---", d);
    const modal = await this.modalCtrl.create({
      component: SelectslotPopupPage,
      cssClass: "small-modal-slot",
      backdropDismiss: true,
      swipeToClose: true,
    });

    await modal.present();
    const modaldata = await modal.onDidDismiss();
    const slot = modaldata?.data;
    if (slot) {
      const modal = await this.modalCtrl.create({
        component: PortionCountPage,
        cssClass: "portion_count",
        backdropDismiss: true,
        swipeToClose: true,
        componentProps: {
          alterdata: this.data,
          type: "add",
        },
      });
      await modal.present();
      const modaldata = await modal.onDidDismiss();
      const d = modaldata?.data;
      if (d) {
        const datas = {
          date: CONSTANTS.dietDate,
          foodCodeList: [
            {
              code: d._id,
              portion: Number(d.portion),
              eaten: 2,

              foodSource: d.foodSource,
            },
          ],
          slot: Number(slot.slot),
          isUpdateDiet: true,
        };
        console.log("datas", datas);
        this.appServices.postOptionFoodList1(datas).then(
          (res) => {
            console.log("food code update", res);
            // this.modalCtrl.dismiss({});
            this.utilities.closeModal();
            this.navCtrl.navigateForward([
              "/new-diet",
              { refresh: new Date().getTime() },
            ]);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      console.log("slot", slot);
    }
  }

  async gotoView(d) {
    // this.modalCtrl.dismiss();
    d.imageUrl = d.imageId;
    const modal = await this.modalCtrl.create({
      component: ViewProductPage,
      componentProps: {
        food: d,
        // from: "search",
        slot: this.slot,
      },
      backdropDismiss: true,
    });
    this.utilities.storeModal(modal);
    modal.present();
  }
}
