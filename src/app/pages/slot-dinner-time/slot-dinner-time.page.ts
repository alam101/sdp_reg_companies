import { Component, OnInit } from "@angular/core";
import { UTILITIES } from "../../core/utility/utilities";
import { message } from "../../core/constants/constants";
import { Storage } from "@ionic/storage";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-slot-dinner-time',
  templateUrl: './slot-dinner-time.page.html',
  styleUrls: ['./slot-dinner-time.page.scss'],
})
export class SlotDinnerTimePage implements OnInit {

  slotTiming = [{
    text: '6:00 PM',
    value: 18,
    isSelected: false
  },
  {
    text: '6:30 PM',
    value: 18.5,
    isSelected: false

  },
  {
    text: '7:00 PM',
    value: 19,
    isSelected: false

  },
  {
    text: '7:30 PM',
    value: 19.5,
    isSelected: false

  },
  {
    text: '8:00 PM',
    value: 20,
    isSelected: false

  }, {
    text: '8:30 PM',
    value: 20.5,
    isSelected: false

  }, {
    text: '9:00 PM',
    value: 21,
    isSelected: false
  }
  ];
  selectedSlot = 0;
  isEdit = "";
  constructor(
    private router: Router,
    private storage: Storage,
    private utilities: UTILITIES,
    private route: ActivatedRoute
  ) { }

  ionViewDidEnter() {
    this.route.queryParams.subscribe(res => {
      if (res["prop"] != undefined) {
        this.isEdit = res["prop"];
      }
    });
    this.storage.get("slotTiming").then(local => {
      if (local && local["dinner"]) {
        let find = this.slotTiming.findIndex(o => o.value == local["dinner"]);
        if (find != -1) {
          this.slotTiming[find].isSelected = true;
          this.selectedSlot =  this.slotTiming[find].value;
        }
      }
      else {
        this.storage.get("diets").then((localDiets: any = []) => {
          let caches = {};
          if (localDiets) {
            let index = localDiets.findIndex(o => o.slot == 7);
            if (index != -1) {
              let split = localDiets[index].time.split(":");
              if (split[1] == "30") {
                caches["dinner"] = parseInt(split[0]) + .5;
              } else {
                caches["dinner"] = parseInt(split[0])
              }
              let find = this.slotTiming.findIndex(o => o.value == caches["dinner"]);
              if (find != -1) {
                this.slotTiming[find].isSelected = true;
                this.selectedSlot = caches["dinner"];

              }
            } else {
              caches["dinner"] = 19;
              let find = this.slotTiming.findIndex(o => o.value == caches["dinner"]);
              if (find != -1) {
                this.slotTiming[find].isSelected = true;
                this.selectedSlot = caches["dinner"];
              }
            }
            index = localDiets.findIndex(o => o.slot == 8)
            if (index != -1) {
              if (localDiets[index].time) {
                let split = localDiets[index].time.split(":");
                if (split[1] == "30") {
                  caches["post-dinner"] = parseInt(split[0]) + .5;
                } else {
                  caches["post-dinner"] = parseInt(split[0])
                }
              } else {
                caches["post-dinner"] = null;

              }

            }
            else {
              caches["post-dinner"] = null;
            }
            index = localDiets.findIndex(o => o.slot == 2)
            if (index != -1) {
              let split = localDiets[index].time.split(":");
              if (split[1] == "30") {
                caches["bf"] = parseInt(split[0]) + .5;
              } else {
                caches["bf"] = parseInt(split[0])
              }
            }
            index = localDiets.findIndex(o => o.slot == 4)
            if (index != -1) {
              let split = localDiets[index].time.split(":");
              if (split[1] == "30") {
                caches["lunch"] = parseInt(split[0]) + .5;
              } else {
                caches["lunch"] = parseInt(split[0])
              }
            }
            this.storage.set("slotTiming", caches);

          }
        })
      }
    })
  }
  ngOnInit() { }

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
        slots["dinner"] = this.selectedSlot;
        if (this.selectedSlot >= 20) {
          slots["post-dinner"] = null;
        }
        this.storage.set("slotTiming", slots);
      })
      if (this.selectedSlot < 20) {
        this.router.navigate(["/slot-post-dinner-time"]);
      }
      else {
        this.router.navigate(["/slot-bf-time"]);

      }
    } else {
      this.utilities.showErrorToast(message.timing);
    }
  }

  back() {
    if (this.isEdit != '') {
      this.router.navigate(["user-profile"], { queryParams: { prop: 'edit' } });
    } else {
      this.router.navigate(["/consume"]);
    }
  }
}