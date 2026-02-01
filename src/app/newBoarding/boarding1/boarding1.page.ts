import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { AppService } from "../app.service";
import { UTILITIES } from "src/app/core/utility/utilities";
import { IonicModule, LoadingController } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-boarding1",
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: "./boarding1.page.html",
  styleUrls: ["./boarding1.page.scss"],
})
export class Boarding1Page implements OnInit, AfterViewInit {
  name = "";
  prof;
  isChild = localStorage.getItem("kids") === "true" ? true : false;
  regex: RegExp = /^[A-Za-z0-9 ]+$/;
  isNameValid = true;
  client = "";
  constructor(
    private router: Router,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService,
    private loading: LoadingController
  ) {
    this.client = localStorage.getItem("clientId");
    setTimeout(() => {
      this.dismissLoader();
    }, 1000);
  }
  inputValue: string = '';
  onInputChange(event: any): void {
    const value = event.target.value;

    // Ensure only letters are allowed (optional: include spaces, punctuation, etc.)
    this.inputValue = value.replace(/[0-9]/g, ''); // Removes all numeric characters

    // Update the value in the input
    event.target.value = this.inputValue;
  }
  ngOnInit() {
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
  ngAfterViewInit() {
    // this.storage.get("profileData").then((profileData) => {
    //   this.prof = this.utilities.parseJSON(profileData);
    //   this.name =
    //     this.prof && this.prof["profile"] && this.prof["profile"]["name"]
    //       ? this.prof["profile"]["name"]
    //       : "";
    //   this.name = this.name.replace("' '", "").replace(/[^A-Za-z0-9 ]/g, "");
    //   this.isNameValid = true;
    // });
  }

  dismissLoader() {
    this.loading.dismiss().then((response) => {
      console.log('Loader closed!', response);
    }).catch((err) => {
      console.log('Error occured : ', err);
    });
  }

  goNext() {
    console.log(this.name);

    if (this.name ?.trim() === "") {
      if (!this.regex.test(this.name)) {
        this.name.replace(this.regex, "");
        this.isNameValid = false;
        this.utilities.showErrorToast("Please enter valid chatacters.");
        return false;
      }
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
      this.prof["profile"]["given_name"] = "for testing:---";
      this.prof["profile"]["family_name"] = data.LastName;
      this.prof["profile"]["firstName"] = data.FirstName;
      this.prof["profile"]["lastName"] = data.LastName;

    }

    this.storage.set("newProfilePic", JSON.stringify(this.prof["profile"]));
    this.appService.updateProfile(this.prof["profile"]).then((res) => {
      // this.storage.get("localData").then((local) => {
      console.log("profile:-", this.prof);
      this.storage.set("profileData", this.utilities.parseString(this.prof));
      if (this.isChild) {
        this.storage.set("pendingPage", "/boarding2");
        this.router.navigate(["/boarding2"]);
      }
      else {
        this.storage.set("pendingPage", "/boarding");
        this.router.navigate(["/boarding"]);
      }

      // if(this.isEdit != ""){
      //   this.router.navigate(["gender"], { queryParams: {prop: 'edit'} });
      // }else{
      //   this.router.navigate(["gender"]);
      // }
    });
  }
}
