import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { ModalController } from "@ionic/angular";
import moment from "moment";
import { AppService } from "../../../home-service/app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { DetoxPlanPage } from "./detox-plan/detox-plan.page";

@Component({
  selector: "app-detox",
  templateUrl: "./detox.page.html",
  styleUrls: ["./detox.page.scss"],
})
export class DetoxPage implements OnInit, OnChanges {
  @Input() isDetox: Boolean;
  @Input() plan: Boolean;
  @Input() selecteddate: any;
  @Input() newselectedDate: any;
  @Output() getDietdata = new EventEmitter();
  moment: any = moment;
  today = new Date();
  tommorow = new Date(new Date().setDate(new Date().getDate() + 1));

  constructor(
    private modalCtrl: ModalController,
    private appService: AppService,
    private utility: UTILITIES
  ) {}

  ngOnInit() {}
  ngOnChanges() {
    console.log("********************", this.isDetox);
    this.today = new Date();
    this.tommorow = new Date(new Date().setDate(new Date().getDate() + 1));
  }

  async switchDetox() {
    this.detoxStatus();
    if (CONSTANTS.isDetox) {
      CONSTANTS.isDetox = !CONSTANTS.isDetox;
      this.isDetox = CONSTANTS.isDetox;
      const d: any = CONSTANTS.isDetox;
      localStorage.setItem(CONSTANTS.dietDate, JSON.stringify(d));
      this.utility.showSuccessToast("Your plan for today is Normal now");
      this.getDietdata.emit(CONSTANTS.dietDate);
    } else {
      const modal = await this.modalCtrl.create({
        component: DetoxPlanPage,
        backdropDismiss: true,
        cssClass: "app-offer-popup",
      });

      modal.present();
      modal.onDidDismiss().then((res) => {
        if (res?.data) {
          CONSTANTS.isDetox = !CONSTANTS.isDetox;
          this.isDetox = CONSTANTS.isDetox;
          const d: any = CONSTANTS.isDetox;
          localStorage.setItem(CONSTANTS.dietDate, JSON.stringify(d));
          this.utility.showSuccessToast("Your plan for today is Detox now");
          this.getDietdata.emit(CONSTANTS.dietDate);
        }
      });
    }
  }

  detoxStatus() {
    const reqBody = {
      detox: !this.isDetox,
      date: CONSTANTS.dietDate,
    };
    this.appService.updateDetoxStatus(reqBody).subscribe((res) => {
      console.log(res);
    });
  }
}
