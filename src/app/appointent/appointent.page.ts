import { Component, Input, OnInit } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { NavController } from "@ionic/angular";
import { AppService } from "src/app/app.service";
import { UTILITIES } from "src/app/core/utility/utilities";

@Component({
  selector: "app-appointent",
  templateUrl: "./appointent.page.html",
  styleUrls: ["./appointent.page.scss"],
})
export class AppointentPage implements OnInit {
  @Input() plan: boolean = false;
  @Input() from: any = "";
  @Input() data: any = [];
  @Input() profileData: any = {};
  @Input() duration: any;
  @Input() planType:any=true;
  @Input() deititianName="";
  @Input() deititianRole="";
  @Input() calendlyId="";
  @Input()gender = false;
  @Input()image = "";
  constructor(
    private iab: InAppBrowser,
    private navCtrl: NavController,
    private appService: AppService,
    private utilities: UTILITIES
  ) {}

  ngOnInit() {}

  ngOnChanges() {}
 
  gotoApply(url, type) {

    if(!this.planType){
      this.utilities.showToastforMessage("Only for Premium Plan!");
      return;
    }
    let email: any = "";
    let phone: any = "";

    if (this.appService.emailOnly(this.profileData?.email)) {
      email = this.profileData?.email;
    } else {
      phone = this.profileData?.email;
    }
    const u =
      url +
      `?name=${this.profileData?.name || ""}&email=${email || ""}&a1=${
        phone || ""
      }&a2=”I need support for my ${type} plan. My%20profile%20ID%20is%20${
        this.profileData?.email
      }”`;
   
    this.iab.create(u, "_sysyem");
  }
  gotoDietitianProfile(){
    this.navCtrl.navigateForward(["/dietitian-profile"]);
  }
  gotoApplyFree(url, type) {
    let email: any = "";
    let phone: any = "";
    if (this.appService.emailOnly(this.profileData?.email)) {
      email = this.profileData?.email;
    } else {
      phone = this.profileData?.email;
    }
    let u =
      url +
      `?name=${this.profileData?.name || ""}&email=${email || ""}&a1=${
        phone || ""
      }&a2=”My%20profile%20ID%20is%20${
        this.profileData?.email
      }%20And%20I%20want%20to%20for%20understand%20about%20this%20program ”`;
    if (this.duration !== -1) {
      u = "https://calendly.com/sdpdietitian";
    }
    else {
      this.utilities.logEvent("Click_consultations_scheduled_paid", {});
    }
    this.iab.create(u, "_sysyem");
  }

  gotoPremium() {
    this.navCtrl.navigateForward(["/premium-member"]);
  }
}
