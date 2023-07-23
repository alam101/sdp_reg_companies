import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  items=["Edit", "Delete"];
  constructor(private navParams:NavParams, private popover:PopoverController) {
   
   }

  ngOnInit() {}

  dismissPopover(flag){
    // console.log("Flag ", flag);
    let obj = {}
    if(flag) obj["action"] = flag;
    this.popover.dismiss(obj);
  }
}
