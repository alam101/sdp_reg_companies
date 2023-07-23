import { Component, Input, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-calories",
  templateUrl: "./calories.page.html",
  styleUrls: ["./calories.page.scss"],
})
export class CaloriesPage implements OnInit {
  @Input() allData: any = {totalCal:0,targetCal:{recomended:0}};
  @Input() PlusIconRoute = "";
  totalCalEaten: any;
  width: any;

  constructor(private navCtrl: NavController) {}
  compConfig:any;
  ngOnInit() {
    console.log(this.totalCalEaten);
    this.width = window.screen.width - 40;
    console.log(this.width);
    this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
  }
  
 
    
  ngAfterViewInit() {
    
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

  ngOnChanges() {
    
  }

  
  gotoDiet() {
    this.navCtrl.navigateForward([this.PlusIconRoute]);
  }
}
