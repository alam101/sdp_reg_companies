import { Component, OnInit } from "@angular/core";
import { UTILITIES } from "../../core/utility/utilities";
import { message,CONSTANTS } from "../../core/constants/constants";
import { Storage } from "@ionic/storage";
import { Router, ActivatedRoute } from "@angular/router";
import { AppService } from "../../home-service/app.service";
import moment from "moment";
@Component({
  selector: 'app-slot-lunch-time',
  templateUrl: './slot-lunch-time.page.html',
  styleUrls: ['./slot-lunch-time.page.scss'],
})
export class SlotLunchTimePage implements OnInit {
  slotTiming = [];
  selectedSlot = 0;
  slot0: any;
  constructor(
    private router: Router,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService
  ) { }

  ngOnInit() {

  }
  timeConvert(num) {
    let AMPM = (num < 12 || num === 24) ? " AM" : " PM";
    let number=(num > 12.5) ? (num-12 ) : num;
     number = number.toString().split(".");
    if (number[1]) {
      return number[0] + ":" + 30 + AMPM;
    } else {
      return number[0] + ":00" + AMPM;
    }
  }

  ionViewDidEnter() {
    this.storage.get("diets").then(diet => {
      let index = diet.findIndex(o => o.slot == 0);
      if (index != -1) {
        this.slot0 = diet[index].time;
      }
    })
    this.storage.get("slotTiming").then(local => {
      if (local) {
        let startSlot = 0;
        if (local["bf"]) {
          this.slotTiming = [];
          startSlot = local["bf"] + 3.5;
          for (var i = startSlot; i <= 14.50; i = i + 0.5) {
            this.slotTiming.push(
              {
                text: this.timeConvert(i),
                value: i,
                isSelected: false
              },
            )
          }
        }
        let index = this.slotTiming.findIndex(o => o.value == local["lunch"]);
        if (index != -1) {
          this.slotTiming[index].isSelected = true;
          this.selectedSlot = local["lunch"];

        }
      }

    })
  }
  selectSlot(value) {
    this.slotTiming.forEach(element => {
      element.isSelected = false;
    });
    let index = this.slotTiming.findIndex(o => o.value == value);
    this.selectedSlot = value;
    this.slotTiming[index].isSelected = true;
  }

  goto() {
    if (this.selectedSlot) {
      this.storage.get("slotTiming").then(local => {
        let slots: any = {};
        if (local) {
          slots = local;
        }
        slots["lunch"] = this.selectedSlot;
        this.storage.set("slotTiming", slots);
        let slotParams = {
          "timings": [
            {
              "slot": 0,
              "time": "06:30"
            },
            {
              "slot": 1,
              "time": this.decimalToTime(local["bf"] - .5)
            },
            {
              "slot": 2,
              "time": this.decimalToTime(local["bf"])
            },
            {
              "slot": 3,
              "time": this.decimalToTime(local["bf"] + 1)
            },
            {
              "slot": 4,
              "time": this.decimalToTime(this.selectedSlot)
            },
            {
              "slot": 5,
              "time": this.decimalToTime(this.selectedSlot + 1)
            },
            {
              "slot": 6,
              "time": this.decimalToTime(this.selectedSlot + 2)
            },
            {
              "slot": 7,
              "time": this.decimalToTime(local["dinner"])
            },
            {
              "slot": 8,
              "time": local["post-dinner"] ? this.decimalToTime(local["post-dinner"]) : null
            }
          ],
          detox:CONSTANTS.isDetox

        }
        console.log(slotParams);
        this.utilities.presentLoading();
        this.appService.dietPlanSlotTimingUpdate(slotParams).then(
          success => {
            this.utilities.hideLoader();
            this.storage.remove("slotTiming");
            this.storage.set("dietData", null).then(()=>{
              this.storage.set("optionsData", null).then(()=>{
                CONSTANTS.dietDate = moment().format("DDMMYYYY");
                this.utilities.showSuccessToast("diet timings updated");
                localStorage.setItem("slideToFirst", "true");
                this.router.navigate(["consume"]);
              })
            })
          },
          err => {
            this.utilities.hideLoader();
            this.utilities.presentAlert(err.message);
            console.log("Error:", err);
          }
        );
      })


    } else {
      this.utilities.showErrorToast(message.timing);
    }
  }
  21

  decimalToTime(minutes) {
    var sign = minutes < 0 ? "-" : "";
    var min = Math.floor(Math.abs(minutes));
    var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
  }
  back() {
    this.router.navigate(["/slot-bf-time"]);
  }
}
