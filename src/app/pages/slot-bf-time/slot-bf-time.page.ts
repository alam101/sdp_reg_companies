import { Component, OnInit } from "@angular/core";
import { UTILITIES } from "../../core/utility/utilities";
import { message } from "../../core/constants/constants";
import { Storage } from "@ionic/storage";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-slot-bf-time',
  templateUrl: './slot-bf-time.page.html',
  styleUrls: ['./slot-bf-time.page.scss'],
})
export class SlotBfTimePage implements OnInit {


  slotTiming = [];
  selectedSlot = 0;
  dinnerTime: any;
  fastingTime: any;  
  timeDifference: any;
  fastingTimeDifference: any;
  
  constructor(
    private router: Router,
    private storage: Storage,
    private utilities: UTILITIES
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
    this.storage.get("slotTiming").then(local => {
      if (local) {
        let startSlot = 0;
        this.dinnerTime = local["dinner"];        
        if (local["post-dinner"]) {
          this.fastingTime = local["post-dinner"];
          startSlot = (local["post-dinner"] + 12) - 23.5;
        } else {
          this.fastingTime = local["dinner"];          
          startSlot = (local["dinner"] + 12) - 23.5;
        }
        this.slotTiming = [];
        for (var i = startSlot; i <= 11; i = i + 0.5) {
          this.slotTiming.push(
            {
              text: this.timeConvert(i),
              value: i,
              isSelected: false
            },
          )
        }
        let index = this.slotTiming.findIndex(o => o.value == local["bf"]);
        if (index != -1) {
          this.slotTiming[index].isSelected = true;
          this.selectedSlot = local["bf"];
          this.updateMessage(this.dinnerTime, this.selectedSlot);
       
        }else{
          this.slotTiming[0].isSelected = true;
          this.selectedSlot = 14-(24-this.fastingTime);
          this.updateMessage(this.dinnerTime, this.selectedSlot);
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
    this.updateMessage(this.dinnerTime, this.selectedSlot);
  }

  updateMessage(dinner, breakfast) {
    this.timeDifference  =(Math.abs(24-dinner+breakfast));
    this.fastingTimeDifference=(Math.abs(24-this.fastingTime+breakfast));
  }

  goto() {
    if (this.selectedSlot) {
      this.storage.get("slotTiming").then(local => {
        let slots: any = {};
        if (local) {
          slots = local;
        }
        slots["bf"] = this.selectedSlot;
        this.storage.set("slotTiming", slots);
      })
      this.router.navigate(["/slot-lunch-time"]);

    } else {
      this.utilities.showErrorToast(message.timing);
    }
  }

  back() {
    this.storage.get("slotTiming").then(local => {
      if (local) {
        if (local["post-dinner"]) {
          this.router.navigate(["/slot-post-dinner-time"]);
        } else {
          this.router.navigate(["/slot-dinner-time"]);

        }
      }
    })
  }

}
