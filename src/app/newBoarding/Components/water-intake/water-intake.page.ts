import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-water-intake",
  templateUrl: "./water-intake.page.html",
  styleUrls: ["./water-intake.page.scss"],
})
export class WaterIntakePage implements OnInit {
  drankwater: any = 0;
  recommendedwater = 0;
  width: any;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getDrankWater();
    this.width = window.screen.width - 40;
    console.log(this.width);
  }

  getDrankWater() {
    this.appService.user().subscribe((response: any) => {
      console.log("water recommendation :", response);
      let recommended_water = response.recommendedWater.split('" "');
      console.log(recommended_water);
      this.recommendedwater = parseInt(recommended_water);
      console.log(this.recommendedwater);
      if (localStorage.getItem("localdrankwater")) {
        this.drankwater = parseInt(localStorage.getItem("localdrankwater"));
        this.fillWaterProgress("local");
      }
      // this.drankwater =
      //   response.res.filter((o) => o.waterDrankQuantity > 0).length -
      //   response.res.filter((o) => o.waterDrankQuantity < 0).length;
      // localStorage.setItem("localdrankwater", this.drankwater);
      // this.doProgress(this.drankwater);
    });
  }

  fillWaterProgress(type = "") {
    let water = document.getElementById("water_guage");

    console.log(this.drankwater);
    if (this.drankwater < this.recommendedwater) {
      if (!type) {
        this.drankwater = this.drankwater + 1;
      }
    }

    localStorage.setItem("localdrankwater", this.drankwater);
    water.style.transform =
      "translate(0" +
      "," +
      (100 - (100 / this.recommendedwater) * this.drankwater) +
      "%)";
  }
}
