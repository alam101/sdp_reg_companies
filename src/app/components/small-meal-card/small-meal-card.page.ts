import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import * as _ from "lodash";
import { CONSTANTS } from "src/app/core/constants/constants";

@Component({
  selector: "app-small-meal-card",
  templateUrl: "./small-meal-card.page.html",
  styleUrls: ["./small-meal-card.page.scss"],
})
export class SmallMealCardPage implements OnInit {
  @Input() mealData: any = {};
  @Input() slot: any = {};
  @Output() replacedModal = new EventEmitter();
  @Output() gotoView = new EventEmitter();
  Math: any = Math;
  data: any = {};
  image_URL = "";

  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    console.log("ALAALALALALALALLAA");
    
    this.image_URL = CONSTANTS.image_URL;
    this.data = _.cloneDeep(this.mealData);
    // if (this.data?.foodSource?.toLowerCase() === "external") {
    // this.data.Calories = this.data.Calories * this.data.portion;
    this.data.Carbs = this.data.Carbs * this.data.portion;
    this.data.Fat = this.data.Fat * this.data.portion;
    this.data.Fiber = this.data.Fiber * this.data.portion;
    this.data.Protien = this.data.Protien * this.data.portion;
    if (this.data?.foodSource?.toLowerCase() === "external") {
      this.data.portion_unit = this.data.portion + "-" + this.data.portion_unit;
    }
    if (Number(this.data.Score) === 9) {
      this.data.option = "Best";
    }
    if (Number(this.data.Score) === 6) {
      this.data.option = "Good";
    }
    if (Number(this.data.Score) === 3) {
      this.data.option = "Average";
    }
    if (Number(this.data.Score) === 1) {
      this.data.option = "Below average";
    }
    if (Number(this.data.Score) === 0) {
      this.data.option = "Bad";
    }
    if (Number(this.data.Score) === -1) {
      this.data.option = "Not recommended";
    }
    if (!this.data.Score || this.data.Score == "") {
      this.data.option = "Unverified";
    }

    if (this.mealData?.foodSource?.toLowerCase() === "external") {
      this.data.portion = 1;
    }

    //}
    console.log("small-meal:--",this.data);
  }

  gotoViews(data) {
    // data.portion = this.mealData.portion;
    this.gotoView.emit(data);
  }

  ionViewWillEnter() {}

  replaced() {
    // this.data.portion = 1;
    this.replacedModal.emit(this.data);
  }

  caloryCount(d) {
    if (d.foodSource?.toLowerCase() === "external") {
      d.Calories = d.Calories * d.portion;
      return this.Math.round(d.Calories);
    } else {
      return this.Math.round(d.Calories);
    }
  }
}
