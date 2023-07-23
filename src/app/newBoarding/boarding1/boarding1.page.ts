import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { AppService } from "../app.service";
import { UTILITIES } from "src/app/core/utility/utilities";

@Component({
  selector: "app-boarding1",
  templateUrl: "./boarding1.page.html",
  styleUrls: ["./boarding1.page.scss"],
})
export class Boarding1Page implements OnInit,AfterViewInit {
  name = "";
  prof;
  regex: RegExp = /^[A-Za-z0-9 ]+$/;
  isNameValid = true;

  constructor(
    private router: Router,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.storage.get("profileData").then((profileData) => {
      this.prof = this.utilities.parseJSON(profileData);
      this.name =
        this.prof && this.prof["profile"] && this.prof["profile"]["name"]
          ? this.prof["profile"]["name"]
          : "";
      this.name = this.name.replace("' '", "").replace(/[^A-Za-z0-9 ]/g, "");
      this.isNameValid = true;
    });
  }

  goNext() {
    console.log(this.name);

    if (this.name.length > 0) {
      if (!this.regex.test(this.name)) {
        this.name.replace(this.regex, "");
        this.isNameValid = false;
        this.utilities.showErrorToast("Please enter valid chatacters.");
        return false;
      }
    } else {
      this.utilities.showErrorToast("Please enter your name.");
      return;
    }

    console.log("Name ", this.name);
    let name = this.name.split(/ (.+)/);
    let data = {
      FirstName: name[0],
      LastName: name[1] ? name[1] : "",
    };
    // this.storage.get("profileData").then((profileData)=>{
    //   let prof = this.utilities.parseJSON(profileData);
    if (this.prof["profile"]) {
      this.prof["profile"]["name"] =
        data.LastName != ""
          ? data.FirstName + " " + data.LastName
          : data.FirstName;
      this.prof["profile"]["given_name"] = data.FirstName;
      this.prof["profile"]["family_name"] = data.LastName;
      this.prof["profile"]["firstName"] = data.FirstName;
      this.prof["profile"]["lastName"] = data.LastName;
    } else {
      this.prof["profile"] = {};
      this.prof["profile"]["name"] =
        data.LastName != ""
          ? data.FirstName + " " + data.LastName
          : data.FirstName;
      this.prof["profile"]["given_name"] = data.FirstName;
      this.prof["profile"]["family_name"] = data.LastName;
      this.prof["profile"]["firstName"] = data.FirstName;
      this.prof["profile"]["lastName"] = data.LastName;
    }

    this.storage.set("newProfilePic", JSON.stringify(this.prof["profile"]));
    this.appService.updateProfile(this.prof["profile"]).then((res) => {
      // this.storage.get("localData").then((local) => {
      console.log("profile:-", this.prof);
      this.storage.set("profileData", this.utilities.parseString(this.prof));
      this.storage.set("pendingPage", "/boarding");
      this.router.navigate(["/boarding"]);
      // if(this.isEdit != ""){
      //   this.router.navigate(["gender"], { queryParams: {prop: 'edit'} });
      // }else{
      //   this.router.navigate(["gender"]);
      // }
    });
  }
}
