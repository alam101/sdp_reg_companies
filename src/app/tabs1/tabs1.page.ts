import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from "@ionic/angular";
import { UTILITIES } from "src/app/core/utility/utilities";
import { SearchPage } from '../search/search.page';
@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.page.html',
  styleUrls: ['./tabs1.page.scss'],
})
export class Tabs1Page implements OnInit {

  constructor(  private utilities: UTILITIES,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async gotoSearch() {
    const modal = await this.modalCtrl.create({
      component: SearchPage,
      //cssClass: "change_item",
      backdropDismiss: true,
      componentProps: {
        // slot: "",
        //alterdata: data,
        //type: "change",
      },
    });
    this.utilities.storeModal(modal);
    await modal.present();
    const modaldata = await modal.onDidDismiss();

    const d = modaldata?.data;
    // if (d) {
    //   this.getDietdata.emit(CONSTANTS.dietDate);
    // }
  }
}
