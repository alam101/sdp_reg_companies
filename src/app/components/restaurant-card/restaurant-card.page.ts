import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { ViewRestaurantPage } from "../../view-restaurant/view-restaurant.page";

@Component({
  selector: "app-restaurant-card",
  templateUrl: "./restaurant-card.page.html",
  styleUrls: ["./restaurant-card.page.scss"],
})
export class RestaurantCardPage implements OnInit {
  @Input() data: any = {};
  @Input() slot: any = {};
  @Output() goBack = new EventEmitter();
  image_URL = "";

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController,
    private utilities: UTILITIES
  ) {}

  ngOnInit() {
    this.image_URL = CONSTANTS.image_URL;
    this.data.url = this.router.url;
  }

  async viewRestaurant() {
    // this.goBack.emit();
    // this.navCtrl.navigateForward(["/view-restaurant"], {
    //   queryParams: { data: JSON.stringify(this.data) },
    // });
    const modal = await this.modalCtrl.create({
      component: ViewRestaurantPage,
      id: "ViewRestaurantPage",
      componentProps: {
        data: this.data,
        slot: this.slot,
      },
    });
    this.utilities.storeModal(modal);
    modal.present();
    modal.onDidDismiss().then((res) => {
      // setTimeout(() => {
      this.modalCtrl.dismiss();
      // }, 1000);
    });
  }
}
