import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-new-calories',
  templateUrl: './new-calories.component.html',
  styleUrls: ['./new-calories.component.scss'],
})
export class NewCaloriesComponent implements OnInit,OnChanges {
  @Input() allData: any = {};
  @Input() PlusIconRoute = "";
  @Input() lifeStyle: any = {};
  totalCalEaten: any;
  width: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    console.log("allData:-",this.allData,this.lifeStyle);
   // this.width = window.screen.width - 40;
  //  console.log(this.width);
  }

  compConfig:any;
  ngAfterViewInit() {
    this.compConfig = localStorage.getItem("clientConfig");
  }

  ngOnChanges() {
    console.log("totalCal====>>>", this.allData);
    console.log("totalCal====>>>", this.allData?.totalCal);
    console.log("totalCal====>>>", this.allData?.targetCal);
    if (this.allData?.targetCal) {
      console.log("totalCal====>>>", this.allData?.totalCal);
      console.log("totalCal====>>>", this.allData.targetCal);
      this.totalCalEaten =
        (100 * this.allData?.targetCal?.totalCal) /
        this.allData?.targetCal?.recomended;
      console.log("this.totalCalEaten", this.totalCalEaten);
      this.totalCalEaten = parseInt(this.totalCalEaten);
    }
  }

  
  gotoDiet() {
    this.navCtrl.navigateForward([this.PlusIconRoute]);
  }
}
