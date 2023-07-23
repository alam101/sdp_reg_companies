import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { AppService } from "../../home-service/app.service";
import { UTILITIES } from "../../core/utility/utilities";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-select-plan-popup',
  templateUrl: './select-plan-popup.component.html',
  styleUrls: ['./select-plan-popup.component.scss'],
})
export class SelectPlanPopupComponent implements OnInit {
  planType;
  plan;
  isPremium;
  note;
  isOnlyInfo;
  constructor(public modalController: ModalController, private appService: AppService, private utilities: UTILITIES,private storage: Storage,) { }

  ngOnInit() {
    console.log("Data ", this.planType);
   
  }
  

  close() {
    let data = {};
    this.modalController.dismiss(data);
  }

  doActivate(flag, planId){
    let data = {
      isActivate: true,
      planId: planId
    };
    this.modalController.dismiss(data);
  }
}
