import { Component, OnInit } from "@angular/core";
import { UTILITIES } from "../../core/utility/utilities";
import { message } from "../../core/constants/constants";
import { Storage } from "@ionic/storage";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-slot-post-dinner-time',
  templateUrl: './slot-post-dinner-time.page.html',
  styleUrls: ['./slot-post-dinner-time.page.scss'],
})
export class SlotPostDinnerTimePage implements OnInit {

  slotTiming = [ {
    text: 'Not needed',
    value: null,
    isSelected:false
    
  },{
    text: '8:00 PM',
    value: 20,
    isSelected:false
  },
  {
    text: '8:30 PM',
    value: 20.5,
    isSelected:false
    
  },
  {
    text: '9:00 PM',
    value: 21,
    isSelected:false
    
  },
 
  ];
  selectedSlot=0;
  constructor(
    private router: Router,
    private storage: Storage,
    private utilities: UTILITIES
  ) { }

  ngOnInit() {
   
  }
  ionViewDidEnter() {
    this.storage.get("slotTiming").then(local => {
      if (local) {
        this.selectedSlot = local["post-dinner"];
        let index = this.slotTiming.findIndex(o => o.value == this.selectedSlot);
        if(index != -1){
          this.slotTiming[index].isSelected = true;
        }
      
      }
    })
  }

  selectSlot(value) { 
   this.slotTiming.forEach(element => {
    element.isSelected=false;
   });
   let index=this.slotTiming.findIndex(o=>o.value == value);
   this.selectedSlot=value;
     this.slotTiming[index].isSelected=true;
  }

  goto() {
    if (this.selectedSlot != 0) {
      this.storage.get("slotTiming").then(local => {
        let slots: any = {};
        if (local) {
          slots = local;
        }
        slots["post-dinner"] = this.selectedSlot;
        this.storage.set("slotTiming", slots);
      })
        this.router.navigate(["/slot-bf-time"]);   
    } else {
      this.utilities.showErrorToast(message.timing);
    }
  }

  back() {
    this.router.navigate(["/slot-dinner-time"]);
  }
}
