import { Location } from "@angular/common";
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  iosTransitionAnimation,
  ModalController,
  NavController,
  PickerController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AppService } from "../app.service";
import { UTILITIES } from "src/app/core/utility/utilities";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
  selector: "app-boarding2",
  templateUrl: "./boarding2.page.html",
  styleUrls: ["./boarding2.page.scss"],
})
export class Boarding2Page implements OnInit,AfterViewInit {
  @Input() from = "";
  parseInt(arg0: any) {
    throw new Error("Method not implemented.");
  }
  terms=true;
  targetYear= new Date().getFullYear()-3;
  poundValue = 0.453592;
  profileData: any;
  gender = "";
  height: any = 3;
  minHight = 3;
  maxHight = 84;
  heightType = "feet";
  heightTypeForAPI = "";
  heightSplit: any;

  startDigit = 0;
  endDigit = 10;

  weightType = "kg";
  weight: any = 20.0;
  minWeight: any = 20.0;
  maxWeight: any = 150.0;

  inputHeight: any = `2'6"`;

  targetweight: any = 20.0;
  targetminWeight: any = 20.0;
  targetmaxWeight: any = 150.0;
  targetweightType: any = "kg";

  weightArray = [0, 1, 2, 3, 4, 5, 6];
  setWeightFromArray: any = 50;
  selectedWeight: any = this.setWeightFromArray + this.weightArray[3];
  bornYear = [0, 1, 2, 3, 4];
  setbornYear: any = 1990;
  selectedbornYear: any = this.setbornYear + this.bornYear[2];

  localData: any = {};
  clientId: any;


  selectedHeight: any = 3; // Default height in inches (5 feet 10 inches)
  displayHeight: string = '';

  constructor(
    private navCtrl: NavController,
    private cdr: ChangeDetectorRef,
    private location: Location,
    private appservice: AppService,
    private pickerCtrl: PickerController,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService,
    private modalCtrl: ModalController,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) {
    this.clientId=localStorage.getItem('clientId');
    this.activatedRoute.queryParams.subscribe(res=>{
      this.from = res['from'];
    });
      this.calculateHeight(); 
    }
  
    ngOnInit() {}
  
    modalClose() {
        this.router.navigate(['new-profile']);
     }
  
    
  ngAfterViewInit() {
    this.utilities.logEvent("onboarding_Register_02BasicInfo", {});
    this.storage.get("localData").then((val) => {
      this.localData = this.utilities.parseJSON(val);
     console.log(this.localData);
      if (this.localData?.otherMaster?.gender.length > 0) {
        const gender = this.localData?.otherMaster?.gender?.find(
          (r) => r.isSelected
        );
        if (gender) {
          this.gender = gender.code;
          
        }
      }

      // if (this.localData?.otherMaster?.diet?.suggestedWeight) {
      //   this.targetweight = this.localData.otherMaster.diet.suggestedWeight;
      //   this.targetweightType = this.localData.otherMaster.diet?.param
      //     ? this.localData.otherMaster.diet?.param
      //     : "kg";
      // }
      if (this.localData?.age) {
        this.selectedbornYear = this.localData.age.year;
      }
      if (this.localData?.age) {
        // this.selectedbornYear = this.localData.age.year;
         this.targetYear = this.localData.age.year;
       }
    });
    this.getProfile();
  }
  
  getProfile() {
    this.appService.getProfile().then((res) => {
      console.log(res);
      this.profileData = res;
      this.targetweight = this.profileData?.demographic?.suggestedWeight;
      if(this.profileData?.demographic?.age?.avg_age){
        this.targetYear = new Date().getFullYear() - this.profileData?.demographic?.age?.avg_age;
      }
      if (this.profileData?.demographic?.height) {
        this.heightType =
          this.profileData?.demographic?.height?.unit === "in" ? "feet" : "cm";
        let h: any =
          this.heightType === "feet"
            ? Math.floor(this.profileData?.demographic?.height?.value / 12)+"."+ (this.profileData?.demographic?.height?.value % 12)
            : this.profileData?.demographic?.height?.value;
           this.selectedHeight = this.profileData?.demographic?.height?.value;
            if (this.heightType === "feet") {
          this.minHight = 36;
          this.maxHight = 84;
          this.height = h;
          h = h.split(".");
          console.log(h);
          this.inputHeight = `${Math.floor(this.selectedHeight / 12)}'${(this.selectedHeight % 12)}"`;
          this.heightSplit = h.toString().split(".");
        } else {
          this.inputHeight = h;
          this.height = h;
          this.minHight = 91;
          this.maxHight = 213;
        }

        if (this.profileData?.demographic?.weight) {
          this.weightType =
            this.profileData?.demographic?.weight?.unit === "pound"
              ? "lbs"
              : "kg";
          this.weight = this.profileData?.demographic?.weight?.value;
        }

        console.log(this.height, this.inputHeight);

      }
      else{
        this.minHight = 36;
        this.maxHight = 84;
        this.selectedHeight =48;
        let h = Math.floor(this.selectedHeight / 12)+"."+(this.selectedHeight % 12);
        this.height = h;
 
    //    this.inputHeight = `${Math.floor(this.selectedHeight / 12)}'${(this.selectedHeight % 12)}"`;
        this.heightSplit = h.toString().split(".");
        this.calculateDesiredWeight();
      }
    });
  }

  calculateHeight() {
    const feet = Math.floor(this.selectedHeight / 12)
    const inches = this.selectedHeight % 12;
    this.displayHeight = `${feet} ft ${inches} in`;
  }
  getHeight() {
    console.log("e.detail.value",this.selectedHeight);
    // this.height = parseFloat(e.detail.value).toFixed(1);
    if (this.heightType === "feet") {
      this.minHight = 36;
      this.maxHight = 84;
      const ht = Math.floor(this.selectedHeight / 12) +"."+ (this.selectedHeight % 12);
      const h = ht.split(".");
      this.inputHeight = `${Math.floor(this.selectedHeight / 12)}'${(this.selectedHeight % 12)}"`;
      this.heightSplit =h;
    } else {
      this.height = this.selectedHeight;
      this.inputHeight = this.selectedHeight;
      this.minHight = 91;
      this.maxHight = 213;
    }
    console.log(this.height, this.inputHeight, this.heightType);
    this.calculateDesiredWeight();
  }

  calculateDesiredWeight() {

    console.log("calculateDesiredWeight called");
    if(this.clientId!=='enkeltec'){
    if (this.heightType === "cm" ) {
      this.targetweight = Math.ceil(this.selectedHeight - 100);
    } else {
      this.targetweight = Math.ceil(
        (this.selectedHeight * 2.54) - 100
      );
    }
  }
  }

  goBack() {
    if(this.from){
     this.router.navigate(['new-profile']);
    }
    else{
    this.storage.set("pendingPage", "/boarding");
    this.navCtrl.navigateRoot(["/boarding"]);
  }
}

weightMessage=false;
targetWeightMessage=false;
  goNext() {
    this.weightMessage=false;
    this.targetWeightMessage=false;
     if(!this.terms){
      this.utilities.presentToast("Please accept terms & conditions!");
        return;
     }
     if (!this.weight) {
      this.utilities.presentToast("Please enter your weight.");
      return;
    }
    if(this.weight<20){
      this.weightMessage=true;
      this.cdr.detectChanges();
      return;
    }
    if (!this.targetweight && this.clientId!=='enkeltec') {
      this.utilities.presentToast("Please enter your target weight.");
      return;
    }
    if(this.targetweight<20 && this.clientId!=='enkeltec'){
      this.targetWeightMessage=true;
      return;
    }
    let age = new Date().getFullYear() - this.targetYear;
    const data = {
      age: { code: "A1", label: "15 to 18 years", avg_age: age },
      gender: {
        code: this.gender,
        gender: this.gender === "G1" ? "Male" : "Female",
      },
      height: {
        value: this.convertToInFromCM(),
        unit: this.heightTypeForAPI,
        ischecked: true,
      },
      weight: {
        unit: this.weightType === "lbs" ? "pound" : "kg",
        value: parseFloat(this.weight),
        ischecked: true,
      },
    };
    if (this.localData?.otherMaster?.height) {
      this.localData.otherMaster.height = [
        {
          value: this.convertToInFromCM(),
          param: this.heightTypeForAPI,
          ischecked: true,
        },
      ];

      this.localData.otherMaster.weight = [
        {
          value: parseFloat(this.weight),
          param: this.weightType === "lbs" ? "pound" : "kg",
          ischecked: true,
        },
      ];
      this.localData.otherMaster.diet = {
        ...this.localData?.otherMaster?.diet,
        suggestedWeight: this.targetweight,
        param: this.targetweightType,
      };
      this.localData.age = { age, year: this.targetYear };
      if (typeof this.localData !== undefined)
        this.storage.set("localData", JSON.stringify(this.localData));
    }

    if (!this.gender) {
      this.utilities.presentToast("Please choose your gender.");
      return;
    }

    if (!this.height) {
      this.utilities.presentToast("Please enter your height.");
      return;
    }
  
    if (this.targetYear<new Date().getFullYear()-65 || this.targetYear>new Date().getFullYear()-18) {
      this.utilities.showErrorToast("Please enter correct year [ min:"+(new Date().getFullYear()-65)+" , max:"+(new Date().getFullYear()-18)+"]");
      return;
    }

    this.appservice.postDemographic(data).then((res: any) => {
      //const data = this.utilities.parseJSON(local);
      console.log("response ++++", res);

      if (this.localData?.otherMaster?.bmi != undefined) {
        this.localData.otherMaster.bmi = {
          bmi: parseFloat(res.bmi),
          suggestedWeight: Math.round(res.suggestedWeight),
          category: res.category,
        };
        console.log("response", res);
        this.storage.set("localData", JSON.stringify(this.localData));
      }

      this.appService
        .updateTargetWeight({
          targetedWeight: parseFloat(this.targetweight),
        })
        .then(
          (res) => {},
          (err) => {
            this.utilities.hideLoader();
            this.utilities.presentAlert(JSON.stringify(err));
          }
        );

      
        // if (this.targetweightType == "kg") {
        //   if (this.targetweight < 40 || this.targetweight > 150) {
        //     this.utilities.presentAlert(
        //       "Please select min weight 40 and max 150 kg."
        //     );
        //     return;
        //   }
        // } else {
        //   if (this.targetweight < 88 || this.targetweight > 333) {
        //     this.utilities.presentAlert(
        //       "Please select min weight 88 and max 333 pound."
        //     );
        //     return;
        //   }
        // }
        if (this.from) {
          return this.modalClose();
        }
      this.storage.set("pendingPage", "/boarding3");
      this.navCtrl.navigateForward(["/boarding3"]);
    });
  }

  convertToInFromCM() {
    if (this.heightType === "cm") {
      this.heightTypeForAPI = "cm";
      return this.selectedHeight;
    } else {
      this.heightTypeForAPI = "in";
      console.log(this.heightSplit);
      return this.selectedHeight;
      //return this.height * 12;
    }
  }

  gotoDemographic() {
    if (this.targetweightType == "kg") {
      if (this.targetweight < 20 || this.targetweight > 150) {
        this.targetWeightMessage=true;
        // this.utilities.presentAlert(
        //   "Please select min weight 40 and max 150 kg."
        // );
       return;
      }
      else{
        this.targetWeightMessage=false;
      }
    } else {
      if (this.targetweight < 88 || this.targetweight > 333) {
        this.targetWeightMessage=true;
        // this.utilities.presentAlert(
        //   "Please select min weight 88 and max 333 pound."
        // );
         return;
      }
      else{
        this.targetWeightMessage=false;
      }
    }
  }

  async openPicker() {
    const picker = await this.pickerCtrl.create({
      animated: true,
      mode: "ios",

      columns: [
        {
          name: "bornYear",
          options: [
            {
              text: "1955",
              value: "1955",
            },
            {
              text: "1956",
              value: "1956",
            },
            {
              text: "1957",
              value: "1957",
            },
            {
              text: "1958",
              value: "1958",
            },
            {
              text: "1959",
              value: "1959",
            },
            {
              text: "1960",
              value: "1960",
            },
            {
              text: "1961",
              value: "1961",
            },
            {
              text: "1962",
              value: "1962",
            },
            {
              text: "1963",
              value: "1963",
            },
            {
              text: "1964",
              value: "1964",
            },
            {
              text: "1965",
              value: "1965",
            },
            {
              text: "1966",
              value: "1966",
            },
            {
              text: "1967",
              value: "1967",
            },
            {
              text: "1968",
              value: "1968",
            },
            {
              text: "1969",
              value: "1969",
            },
            {
              text: "1970",
              value: "1970",
            },
            {
              text: "1971",
              value: "1971",
            },
            {
              text: "1972",
              value: "1972",
            },
            {
              text: "1973",
              value: "1973",
            },
            {
              text: "1974",
              value: "1974",
            },
            {
              text: "1975",
              value: "1975",
            },
            {
              text: "1976",
              value: "1976",
            },
            {
              text: "1977",
              value: "1977",
            },
            {
              text: "1978",
              value: "1978",
            },
            {
              text: "1979",
              value: "1979",
            },
            {
              text: "1980",
              value: "1980",
            },
            {
              text: "1981",
              value: "1981",
            },
            {
              text: "1982",
              value: "1982",
            },
            {
              text: "1983",
              value: "1983",
            },
            {
              text: "1984",
              value: "1984",
            },
            {
              text: "1985",
              value: "1985",
            },
            {
              text: "1986",
              value: "1986",
            },
            {
              text: "1987",
              value: "1987",
            },
            {
              text: "1988",
              value: "1988",
            },
            {
              text: "1989",
              value: "1989",
            },
            {
              text: "1990",
              value: "1990",
            },
            {
              text: "1991",
              value: "1991",
            },
            {
              text: "1992",
              value: "1992",
            },

            {
              text: "1993",
              value: "1993",
            },
            {
              text: "1994",
              value: "1994",
            },
            {
              text: "1995",
              value: "1995",
            },
            {
              text: "1996",
              value: "1996",
            },
            {
              text: "1997",
              value: "1997",
            },
            {
              text: "1998",
              value: "1998",
            },
            {
              text: "1999",
              value: "1999",
            },
            {
              text: "2000",
              value: "2000",
            },
            {
              text: "2001",
              value: "2001",
            },
            {
              text: "2002",
              value: "2002",
            },
            {
              text: "2003",
              value: "2003",
            },
            {
              text: "2004",
              value: "2004",
            },
          ],
        },
      ],
      buttons: [
        {
          text: "Confirm",
          handler: (value) => {
            console.log(`You selected: ${value.bornYear.value}`);
            this.selectedbornYear = value.bornYear.value;
          },
        },
      ],
    });

    await picker.present();
  }

  selectGender(e) {
    console.log("e.detail.value",e.detail.value);
    
    this.storage.get("localData").then((val) => {
      this.localData = JSON.parse(val);
      this.localData?.otherMaster?.gender?.forEach((element) => {
        if (element.code === e.detail.value) {
          element.isSelected = true;
        } else {
          element.isSelected = false;
        }
      });
      if (typeof this.localData?.otherMaster !== undefined)
        this.storage.set("localData", JSON.stringify(this.localData));
    });
  }

  setHeightType(type) {
    let h: any;
    if (type === "cm") {
      this.minHight = 91;
      this.maxHight = 213;
      this.selectedHeight = (this.selectedHeight * 2.54).toFixed(0);
     
    } else {
      this.minHight = 36;
      this.maxHight = 84;
      this.selectedHeight = Math.floor(this.selectedHeight * 0.393701);
      
    }
    this.height = this.selectedHeight;
    // this.heightType === "cm"
    //   ? parseInt(h).toFixed(1)
    //   : parseInt(h).toFixed(1);
    this.heightType = type;
  }

  parseint() {
    this.minHight = 36;
    this.maxHight = 84;
    console.log(this.height); 
    return this.heightType === "cm"
      ? parseInt(this.selectedHeight)
      : parseInt(this.selectedHeight);
  }

  setweightType(type) {
    let w: any;
    if (type == "kg") {
      this.minWeight = 20.0;
      this.maxWeight = 15.0;
      if (this.weightType === type) {
        w = this.weight;
      } else {
        w = this.weight * 0.45;
      }
    } else {
      this.minWeight = 20.0 / 0.45;
      this.maxWeight = 150 / 0.45;
      if (this.weightType === type) {
        w = this.weight;
      } else {
        w = this.weight / 0.45;
      }
    }

    // this.weight = parseFloat(w).toFixed(1);
    this.weight = parseInt(w);
    this.weightType = type;
  }

  setTargetweightType(type) {
    let tw: any;

    if (type == "kg") {
      this.targetminWeight = 20.0;
      this.targetmaxWeight = 150.0;
      if (this.targetweightType === type) {
        tw = this.targetweight;
      } else {
        tw = this.targetweight * 0.45;
      }
    } else {
      this.targetminWeight = 20.0 / 0.45;
      this.targetmaxWeight = 150 / 0.45;
      if (this.targetweightType === type) {
        tw = this.targetweight;
      } else {
        tw = this.targetweight / 0.45;
      }
    }
    // this.targetweight = parseFloat(this.targetminWeight).toFixed(1);
    this.targetweight = Math.abs(parseInt(tw));
    this.targetweightType = type;
  }

  setWeight(type) {
    if (type === "add") {
      if (this.weight !== parseFloat(this.maxWeight).toFixed(1)) {
        const t: any = parseFloat(this.weight) + 0.1;
        this.weight = parseFloat(t).toFixed(1);
      }
    } else {
      if (this.weight !== parseFloat(this.minWeight).toFixed(1)) {
        const t: any = parseFloat(this.weight) - 0.1;
        this.weight = parseFloat(t).toFixed(1);
      }
    }
  }

  scroll(e) {
    console.log(e);
  }

  gotoTerm(){
    //window.open("https://fitrofy.com/terms-conditions/","_blank");
    if(this.from){
      this.router.navigate(["termsandconditions"],{queryParams:{from:'editProfile'}});
    }
    else{
      this.router.navigate(["termsandconditions"]);
    }
    
  }
  setRange(type: string) {
    console.log(type);
    if (type === "plus") {
      this.setWeightFromArray = this.setWeightFromArray + 1;
    } else {
      this.setWeightFromArray = this.setWeightFromArray - 1;
    }
    this.selectedWeight = this.setWeightFromArray + this.weightArray[3];
    this.cdr.detectChanges();
  }

  setBornRange(type: string) {
    console.log(type);
    if (type === "plus") {
      this.setbornYear = this.setbornYear + 1;
    } else {
      this.setbornYear = this.setbornYear - 1;
    }
    this.selectedbornYear = this.setbornYear + this.bornYear[2];
    this.cdr.detectChanges();
  }

  getValue(e) {
    console.log(e.detail.value);
  }
}

