import { Location } from "@angular/common";
import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AppService } from "../app.service";
import { UTILITIES } from "src/app/core/utility/utilities";
import { ActivatedRoute, Router } from "@angular/router";
// import { UTILITIES } from "../core/utility/utilities";

@Component({
  selector: "app-boarding4",
  templateUrl: "./boarding4.page.html",
  styleUrls: ["./boarding4.page.scss"],
})
export class Boarding4Page implements OnInit {
  @Input() from = "";
  clientId = "";
  isChild = false;
  healths: any = [];
  showData: Boolean = false;
  showDataAl: Boolean = false;
  allergies: any = [];
  healthDisabled = false;
  alergyDisabled = false;
  localData: any;
  mainHealthArray = [];
  profileData: any = {};

  constructor(
    private appservice: AppService,
    private location: Location,
    private navCtrl: NavController,
    private storage: Storage,
    private utilities: UTILITIES,
    private cdr: ChangeDetectorRef,
    private modalCtrl: ModalController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.clientId = localStorage.getItem("clientId");
    this.activatedRoute.queryParams.subscribe(res => {
      this.from = res['from'];
    })
  }
  goBack() {
    if (this.from) {
      this.router.navigate(['new-profile']);
    }
    else {
      this.storage.set("pendingPage", "/boarding3");
      this.navCtrl.navigateRoot(["/boarding3"]);
    }
  }
  compConfig: any;
  ngOnInit() {
    this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
    console.log("this.compConfig", this.compConfig);
    this.storage.get("localData").then((val) => {
      let data = this.utilities.parseJSON(val);
      console.log(data);
      this.localData = data;
      this.getProfile();
    });
  }

  trayaAllergies = [];
  getProfile() {
    this.appservice.getProfile().then((res) => {
      console.log(res);
      this.profileData = res;
      const loc = this.localData.otherMaster.diseases.filter((f) =>
        this.profileData ?.lifeStyle ?.diseases ?.includes(f.code)
      );
      loc ?.forEach((ele) => (ele.isSelected = true));
      console.log("loc=============================>", loc);
      if (this.localData.otherMaster.diseases.length > 0) {
        let gender = this.localData.otherMaster.gender.filter((ele) => {
          return ele.isSelected == true;
        });
        let a = [];
        let h = [];
        if (
          gender &&
          gender.length > 0 &&
          gender[0]["value"].toLowerCase() == "male"
        ) {
          this.healths = this.localData.otherMaster.diseases.filter((ele) => {
            if (
              ele.code.toLowerCase() != "pd" &&
                ele.code.toLowerCase() != "k" &&
                ele.code.toLowerCase() != "p" &&
                ele.code.toLowerCase() != "m" &&
                ele.code.toLowerCase() != "l" &&
                this.clientId === 'lalpathlabs' ?
                (ele.code.toLowerCase() != "ir" &&
                  ele.code.toLowerCase() != "vb" &&
                  ele.code.toLowerCase() != "vd" &&
                  ele.code.toLowerCase() != "hp" &&
                  ele.code.toLowerCase() != "cr") : true

            ) {
              if (
                ele.value.includes("Allergy") ||
                ele.value.includes("allergy")
              ) {
                if (this.clientId === 'traya') {
                  if (ele.code.toLowerCase() != "f"
                    && ele.code.toLowerCase() != "so"
                    && ele.code.toLowerCase() != "sf") {
                    this.allergies.push(ele);
                  }
                  else {
                    this.trayaAllergies.push(ele);
                  }
                }
                else {
                  this.allergies.push(ele);
                }

                if (ele.isSelected) {
                  a.push(ele);
                }
              } else {
                if (ele.isSelected) {
                  h.push(ele);
                }

                return ele;
              }
            }

          });


          if (a.length === 0) {
            this.alergyDisabled = true;
          }
          if (h.length === 0) {
            this.healthDisabled = true;
          }
          console.log(this.healths);

          console.log(this.allergies);
        } else {
          this.healths = this.localData.otherMaster.diseases.filter((ele) => {
            if (
              ele.value.includes("Allergy") ||
              ele.value.includes("allergy")
            ) {
              this.allergies.push(ele);
              if (ele.isSelected) {
                a.push(ele);
              }
            } else {
              if (ele.isSelected) {
                h.push(ele);
              }
              return ele;
            }
          });
          if (a.length === 0) {
            this.alergyDisabled = true;
          }
          if (h.length === 0) {
            this.healthDisabled = true;
          }
        }
      }
      if (this.clientId === 'enkeltec') {
        this.healths = this.healths.filter(item => {
          return (
            item.code === "AN" ||
            item.code === "CR" ||
            item.code === "HP" ||
            item.code === "VD" ||
            item.code === "VB" ||
            item.code === "A"
          );
        });
      }
      if (this.clientId === 'lalpathlabs') {
        this.healths = this.healths.filter(item => {
          return (
            item.code.toLowerCase() != "ir" &&
            item.code.toLowerCase() != "vb" &&
            item.code.toLowerCase() != "vd" &&
            item.code.toLowerCase() != "hp" &&
            item.code.toLowerCase() != "cr"
          );

        });
      }
    });
  }

  modalClose() {
    this.router.navigate(['new-profile']);
  }

  healthSelection(e, health, diseasesName) {
    console.log("e--->>", e);
    console.log("e--->>", e.detail);
    if (health.code == "K" || health.code == "L" || health.code == "M") {
      console.log("came in if case");
      this.utilities.presentAlert(
        `Our solution is currently not optimised for ${diseasesName}, hence we regret to stop the further journey of weight loss by Smart Diet Planner.`
      );
      // e.detail.checked = false;
      health.isSelected = false;

      // this.healths.forEach((elm) => {
      //   if (elm.code == health.code) {
      //     elm.isSelected = false;
      //   }
      // });
      this.cdr.detectChanges();
      console.log(this.healths);
      // this.navCtrl.navigateForward([
      //   "/boarding4",
      //   { refresh: new Date().getTime() },
      // ]);
    } else {
      console.log("came in else case");
      health.isSelected = e.detail.checked;
      const t = this.localData.otherMaster.diseases.find((d) => d === health);
      t.isSelected = e.detail.checked;
      console.log("DATA+++", this.healths, this.localData.otherMaster.diseases);
    }
  }

  popupShow(health) {
    console.log("health=======>", health);
    if (health.code == "K" || health.code == "L" || health.code == "M") {
      console.log("came in if case");

      this.utilities.presentAlert(
        `Our solution is currently not optimised for ${health.value}, hence we regret to stop the further journey of weight loss by Smart Diet Planner.`
      );
    } else {
      return;
    }
  }

  allergySelection(e, alergy) {
    alergy.isSelected = e.detail.checked;
    const t = this.localData.otherMaster.diseases.find((d) => d === alergy);
    t.isSelected = e.detail.checked;
    console.log(this.allergies, this.localData.otherMaster.diseases);
  }

  noneSelection(type, disabletype, e) {
    this[disabletype] = e.detail.checked;
    this[type].forEach((element) => {
      element.isSelected = false;
    });

    // console.log(this.localData.otherMaster.diseases);

    this.localData.otherMaster.diseases.forEach((element) => {
      if (type === "allergies") {
        if (
          element.value.includes("Allergy") ||
          element.value.includes("allergy")
        ) {
          element.isSelected = false;
        }
      } else {
        if (
          !element.value.includes("Allergy") ||
          !element.value.includes("allergy")
        ) {
          element.isSelected = false;
        }
      }
    });
  }


  reqBodyDiet = {
    dietPlanName: 'trayaHealth'
  };
  goNext() {
    for (let index = 0; index < this.localData.otherMaster.diseases.length; index++) {
      for (let b = 0; b < this.trayaAllergies.length; b++) {
        if (this.localData.otherMaster.diseases[index].code === this.trayaAllergies[b].code) {
          this.localData.otherMaster.diseases[index].isSelected = true;
        }

      }

    }
    if (typeof this.localData.otherMaster !== undefined)
      this.storage.set("localData", JSON.stringify(this.localData));
    let data = [];

    this.localData.otherMaster.diseases.forEach((element) => {
      if (element.isSelected) {
        data.push(element.code);
      }

    });


    const reqBody = {
      activities: this.profileData ?.lifeStyle ?.activities,
      diseases: data,
      communities:
        typeof this.profileData ?.lifeStyle ?.communities === undefined ||
          this.profileData ?.lifeStyle ?.communities === null
            ? []
            : this.profileData ?.lifeStyle ?.communities,
      country: this.profileData ?.lifeStyle ?.country,
      foodType: this.profileData ?.lifeStyle ?.foodType,
      firstConsult: localStorage.getItem("clientId") === "orthocure" ? (this.profileData ?.lifeStyle ?.firstConsult === undefined ? false : this.profileData ?.lifeStyle ?.firstConsult) : null,
      consultQA: this.profileData ?.lifeStyle ?.consultQA === undefined ? [] : this.profileData ?.lifeStyle ?.consultQA,
      instructions: this.profileData ?.lifeStyle ?.instructions === undefined ? '' : this.profileData ?.lifeStyle ?.instructions,
      dietPlanName: this.profileData ?.lifeStyle ?.dietPlanName
    };
    console.log(reqBody);
    this.appservice.postLifeStyle(reqBody).then((success) => {
      if (localStorage.getItem("clientId") == 'traya') {
        this.appservice.dietPlan(this.reqBodyDiet).then((res) => { });
      }
    });
    if (this.from) {
      return this.modalClose();
    }
    this.storage.set("pendingPage", "/boarding5");
    this.navCtrl.navigateForward(["boarding5"]);
  }

  // selectHealth(health,value) {
  //   if (health == "K" || health == "L" || health == "M") {
  //     this.utilities.presentAlert(
  //       `Our solution is currently not optimised for ${value}, hence we regret to stop the further journey of weight loss by Smart Diet Planner.`
  //     );
  //     return;
  //   }
  // }
}
