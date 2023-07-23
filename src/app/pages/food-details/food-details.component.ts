import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "../../home-service/app.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
// import { CodeNode } from "source-list-map";
import { UTILITIES } from "../../core/utility/utilities";
import { CONSTANTS } from "../../core/constants/constants";
import { IonSlides } from "@ionic/angular";
import { Storage } from '@ionic/storage';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
})
export class FoodDetailsComponent implements OnInit {
  isV=false;
  isNutritionalShow = true;
  isopenIngredients = false;
  isopenPreparation = false;
  isopenOtherOptions = true;
  checkLength = 0;
  portion: number = 0.0;
  nutriScore;
  displayNutriValue = 0;
  foodSource: string;
  calories: number = 0;
  foodCode = "";
  allFood: any = [];
  categoryType = "";
  slot = 0;
  portionX;
  foodDetails: any = [];
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2.5,
    loop: false,
    centeredSlides: false,
    spaceBetween: 8
  };
  loaded = false
  streamVideo = false;
  isOtherOptinsLoaded = false;
  filteredItem: any = [{ portion_unit: '' }];
  foodSourceDomain = "";
  diseases = [];
  recommendedInData = [];
  recomendedData = "";
  selectedDietPlan = "weightLoss";

  canvasWidth = 140;
  // needleValue= 50;
  centralLabel = '';
  readyForChange = true;
  options = {
    hasNeedle: true,
    needleColor: 'black',
    needleUpdateSpeed: 10,
    arcColors: ["#0BB852", "#FFF", "#8BC73C", "#FFF", "#FFAE00", "#FFF", "#FF791F", "#FFF", "#FF2441"],
    arcDelimiters: [14, 15, 29, 30, 49, 50, 74, 75],
    needleStartValue: 0,
  }
  fromCalCounter = false;

  @ViewChild("Slides", { static: false }) slides: IonSlides;
  constructor(
    private appServices: AppService,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private utilities: UTILITIES,
    private storage: Storage,
    private iab: InAppBrowser,
  ) {
    this.route.queryParams.subscribe(res => {
      this.foodCode = res.mainCode;
      this.isV=res.isV;
      this.allFood = res.foodCode;
      this.fromCalCounter = res.fromCalCounter;
      this.categoryType = res.category ? res.category : "";
      this.slot = parseInt(res.slot); 
      this.portionX = res.portion;

      this.fetchFood(this.foodCode);
      console.log("eeee:- ", res);

    });


  }

  ngOnInit() {
    this.selectedDietPlan = CONSTANTS.selectedDietPlan;
    this.image_URL = CONSTANTS.image_URL;
    this.isOtherOptinsLoaded = false;
    this.getOptions();
   }
  image_URL = '';
  ionViewWillEnter() {
  
  }
  openclose() {
    this.isNutritionalShow = !this.isNutritionalShow;
  }
  openIngredients() {
    this.isopenIngredients = !this.isopenIngredients;
  }
  openPreparation() {
    this.isopenPreparation = !this.isopenPreparation;
  }
  openOtherOptions() {
    this.isopenOtherOptions = !this.isopenOtherOptions;
  }

  openLink(url) {
    this.iab.create(url, "_blank", "location=yes");
  }

  fetchFood(foodCode) {
    this.checkLength = JSON.parse(this.allFood).length;
    this.filteredItem = JSON.parse(this.allFood).filter(item => {
      return item.itemCode == this.foodCode;
    });
    if(this.filteredItem.length){
      this.portion = this.filteredItem[0].portion;
      this.categoryType = this.filteredItem[0].category;
      this.foodSource = this.filteredItem[0].foodSource;
    }
    
    console.log("filteredItem", this.filteredItem);
    let reqBody = {
      foodId: foodCode,
      country: CONSTANTS.country,
      date: CONSTANTS.dietDate
    };
    this.appServices.fetchFood(reqBody).subscribe(
      res => {
        this.foodDetails = JSON.parse(JSON.stringify(res)).dietItem;
        this.changeMicros();
        if(!this.filteredItem.length){
          this.portion = this.foodDetails.portion;
          this.foodSource = this.foodDetails.foodSource;
        }
        console.log("fetchFood Response:", res);
        if(this.foodDetails && this.foodDetails.nutriScore){
          this.displayNutriValue = this.foodDetails.nutriScore;
          let nutriScore = 100 - this.foodDetails.nutriScore;
          if(nutriScore >= 95){
            this.nutriScore = 95;
          }else if(nutriScore <= 5){
            this.nutriScore = 5;
          }else{
            this.nutriScore = nutriScore;
          }
        }
        this.calories=this.foodDetails.Calories;
        if(this.foodDetails && this.foodDetails.source && this.foodDetails.source != "-" && this.foodDetails.source != "--"){
          this.foodSourceDomain = this.foodDetails.source.split("//")[1].split("/")[0] + "/..";
        }
        if (this.foodDetails && this.foodDetails.video && this.foodDetails.video != "-" && this.foodDetails.video != "--") {

          this.foodDetails.video = this.foodDetails.video
            .toString()
            .replace('"', "")
            .replace('"', "");
        }
        this.senitizedData(this.foodDetails.video);
        if (this.foodDetails.steps != null) {
          this.foodDetails.steps = this.foodDetails.steps.trim();
        }
        if (this.foodDetails.steps == "") {
          this.foodDetails.steps = "~";
        }
        if (this.foodDetails.recipe != null) {
          this.foodDetails.recipe = this.foodDetails.recipe.trim();
        }
        if (this.foodDetails.recipe == "") {
          this.foodDetails.recipe = "~";
        }

        this.checkDieses();
        // this.portion = this.foodDetails.portion;
      },
      err => {
        console.log("fetchFood error:", err);
      }
    );
  }

  videoClick(data){
    this.videoUrl =  this._sanitizer.bypassSecurityTrustResourceUrl(data);
    this.streamVideo = true;
  }

  closeVideo(){
    this.streamVideo = false;
  }

  checkDieses(){
    this.storage.get("localData").then(val => {
      console.log("profile pic", val);
      if (val != "") {
        let data = JSON.parse(val);
       
        this.diseases = data.otherMaster.diseases.filter(item=>{
          return item.isSelected==true;
         });
         this.diseases.forEach((ele)=>{
           ele.value
         })
         this.recommendedInData = [];
         this.foodDetails.recommendedIn.forEach((ele)=>{
           if(ele && ele != ''){
            let temp = this.diseases.filter(ele1 =>{
              return ele1.value == ele
            })
            if(temp && temp.length > 0){
              this.recommendedInData.push({"isExistingDieases": true , "value": ele});
            }else{
              this.recommendedInData.push({"isExistingDieases": false , "value": ele});
            }
          }
         })
         console.log("recommendedInData ", this.recommendedInData);
       }
    });
  }

  fetchFoodSingleItem(foodCode) {
    this.filteredItem = [];
    this.filteredItem.push(foodCode);
    this.filteredItem[0].portion_unit = "";
    this.portion = parseFloat(this.filteredItem[0].portion);

    this.categoryType = this.filteredItem[0].category;
    console.log("filteredItem", this.filteredItem);
    this.allFood = JSON.parse(this.allFood);
    let newArray = this.allFood.filter(item => {
      return item.itemCode != this.foodCode
    })
    newArray.push(this.filteredItem[0]);
    this.allFood = JSON.stringify(newArray);
    this.foodCode = this.filteredItem[0].itemCode;
    this.foodSource = this.filteredItem[0].foodSource;
    let reqBody = {
      foodId: this.filteredItem[0].itemCode,
      country: CONSTANTS.country
    };
    this.appServices.fetchFood(reqBody).subscribe(
      res => {
        this.foodDetails = JSON.parse(JSON.stringify(res)).dietItem;
        console.log("fetchFood Response:", res);
        if(this.foodDetails && this.foodDetails.nutriScore){
          let nutriScore = 100 - this.foodDetails.nutriScore;
          if(nutriScore >= 95){
            this.nutriScore = 95;
          }else if(nutriScore <= 5){
            this.nutriScore = 5;
          }else{
            this.nutriScore = nutriScore;
          }
        }
        this.calories=this.foodDetails.Calories;
        if (this.foodDetails.video && this.foodDetails.video != "-") {

          this.foodDetails.video = this.foodDetails.video
            .toString()
            .replace('"', "")
            .replace('"', "");
        }
        this.senitizedData(this.foodDetails.video);
        if (this.foodDetails.steps != null) {
          this.foodDetails.steps = this.foodDetails.steps.trim();
        }
        if (this.foodDetails.steps == "") {
          this.foodDetails.steps = "~";
        }
        if (this.foodDetails.recipe != null) {
          this.foodDetails.recipe = this.foodDetails.recipe.trim();
        }
        if (this.foodDetails.recipe == "") {
          this.foodDetails.recipe = "~";
        }
        this.checkDieses();
        // this.portion = this.foodDetails.portion;
      },
      err => {
        console.log("fetchFood error:", err);
      }
    );
  }
  videoUrl: any;
  senitizedData(videoUrl) {
    console.log("videoUrls", videoUrl);
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  totalCarbs;
  totalProtein;
  totalFat;
  totalFiber;
  changeMicros(){
    this.totalCarbs = Math.floor(parseFloat(this.foodDetails.Carbs) * this.portion);
    this.totalProtein = Math.floor(parseFloat(this.foodDetails.Protien) * this.portion);
    this.totalFat = Math.floor(parseFloat(this.foodDetails.Fat) * this.portion);
    this.totalFiber = Math.floor(parseFloat(this.foodDetails.Fiber) * this.portion);
  }

  async plus() {
    if (this.portion <= 20) {
       this.portion =await this.portion + 0.5;
      await this.changeMicros();
    }
  }
  async minus() {
    if (this.portion > 0.5) {
      this.portion =await this.portion - 0.5;
      await this.changeMicros();
    }
  }
  setPortionZeroAndDelete() {
    this.portion = 0;
    this.update();
  }

  update() {
    this.utilities.presentLoading();
  //  this.utilities.logEvent("DietPlan_07aUpdateFromDetails", {})
    let data = JSON.parse(this.allFood);
    let foodCodeList = [];
    let code = "";
    let portions = "";
    console.log("data", data);
    let filteredData = data.filter(item => {
      return item.itemCode == this.foodCode;
    });
    if(filteredData.length){
      filteredData[0].portion = this.portion;
    }

    for (let index = 0; index < data.length; index++) {
      if (data.length > 1 && index < data.length - 1) {
        if(data[index].foodSource.toLowerCase() == "external" || data[index].foodSource.toLowerCase() == "personal"){
          foodCodeList.push(data[index]);
        }else if (filteredData.length && filteredData[0].itemCode == data[index].code) {
          // code = code + data[index].code + ",";
          // portions = portions + this.portion + ",";
          if (this.portion != 0) {
            foodCodeList.push({ code: data[index].code, portion: this.portion, "foodSource":data[index]["foodSource"] ? data[index]["foodSource"] : "INTERNAL", "eaten": data[index].eaten ? data[index].eaten : -1 });
          }
        } else {
          // code = code + data[index].code + ",";
          // portions = portions + data[index].portion + ",";
          foodCodeList.push({ code: data[index].code, portion: parseFloat(data[index].portion), "foodSource":data[index]["foodSource"] ? data[index]["foodSource"] : "INTERNAL", "eaten": data[index].eaten ? data[index].eaten : -1 });
        }
      } else {
        // code = code + data[index].code;
        if(data[index] && data[index].foodSource && data[index].foodSource.toLowerCase() == "external"){
          foodCodeList.push(data[index]);
        }else if (filteredData.length && filteredData[0].itemCode == data[index].code) {
          //  portions = portions + this.portion;
          if (this.portion != 0) {
            foodCodeList.push({ code: data[index].code, portion: this.portion, "foodSource":data[index]["foodSource"] ? data[index]["foodSource"] : "INTERNAL", "eaten": data[index].eaten ? data[index].eaten : -1 });
          }
        } else {
          // portions = portions + data[index].portion;
          foodCodeList.push({ code: data[index].code, portion: parseFloat(data[index].portion), "foodSource":data[index]["foodSource"] ? data[index]["foodSource"] : "INTERNAL", "eaten": data[index].eaten ? data[index].eaten : -1});
        }
      }
    }

    if(!filteredData.length){
      foodCodeList.push({ code: this.foodCode, portion: this.portion, "foodSource":this.foodDetails.foodSource ? this.foodDetails.foodSource : "INTERNAL" , "eaten": -1});
    }
    setTimeout(() => {
      console.log("portions", portions);
      console.log("code", code);
      let reqBody = {
        foodCodeList,
        slot: this.slot,
        detox: CONSTANTS.isDetox,
        date: CONSTANTS.dietDate,
        country: CONSTANTS.country
      };
      console.log("reqBody", reqBody);
    //  this.utilities.logEvent("update_food_details", reqBody);
      this.appServices.postOptionFoodList(reqBody).then(
        success => {
          console.log("detail", success);
          this.updateCurrentDietPlan();
        },
        err => {
          this.utilities.hideLoader();
          console.log("details error", err);
        }
      );
    }, 2000);
  }

  updateCurrentDietPlan(){
    this.utilities.showLoading();
    this.appServices.getDietPlans(CONSTANTS.isDetox,CONSTANTS.dietDate , CONSTANTS.country, CONSTANTS.defaultCalories).then(
      success => {
      this.fetchDiet(CONSTANTS.isDetox, CONSTANTS.dietDate, success["dietplan"]);
    })
  }

  fetchDiet(isDetox, date, success){
    console.log("------------- fetchDietPlan---------");
    let self = this;
     self.appServices.getDietPlans(isDetox, date, CONSTANTS.country,"").then(
       success => {
        self.storage.get("dietData").then((res : any)=>{
          if(res){
            res[date] = res[date] ? res[date] : {};
            res[date][CONSTANTS.selectedDietPlan] = success;
            self.storage.set("dietData", res);
            self.utilities.hideLoader();
            
            self.router.navigate(["new-diet"]).then(() => {
          //    window.location.reload();
            });
            
            console.log("detail", success);
      
          }
        })
      });
    
  }

  cancel() {
    if(this.fromCalCounter) this.router.navigate(['todays-calorie-count']);
    else{
     
      this.router.navigate(["/tabs/consume"]);
      
    }
  }

  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }

  refresh() {
    let filter = this.allOptionData.filter(o => o.code != this.foodCode);
    let random = filter[Math.floor(Math.random() * filter.length)];
    this.fetchFoodSingleItem(random)
  }

  copyOfMainData: any = [];
  categoryLength = 0;
  optionData;
  segments = [];
  activeInd: any = 0;
  xflag = 0;
  allOptionData = [];
  getOptions() {
    this.appServices.getOptions(this.slot, CONSTANTS.isDetox, CONSTANTS.country).then(
      success => {
        console.log("optionData:-", this.optionData);
        this.allOptionData = [];
        this.utilities.hideLoader();
        this.optionData = JSON.parse(JSON.stringify(success));
        this.copyOfMainData = this.optionData;
       

        for (let index = 0; index < this.optionData.mealOptions.length; index++) {
          for (let j = 0; j < this.optionData.mealOptions[index].categories.length; j++) {
            for (let k = 0; k < this.optionData.mealOptions[index].categories[j].food.length; k++) {
              console.log("this.catetgoryType", this.categoryType);
              console.log("this.catetgoryType1", this.optionData.mealOptions[index].categories[j].food[k].Type);
              if (this.categoryType.charAt(0) == this.optionData.mealOptions[index].categories[j].food[k].Type.charAt(0)) {
                this.allOptionData.push(this.optionData.mealOptions[index].categories[j].food[k]);
              }
            }

          }
        }
        this.isOtherOptinsLoaded = true;
        console.log("allOptionData:-", this.allOptionData);
      
      },
      err => {
        console.log("errr");
        
        this.utilities.hideLoader();
      }
    );


  }

  imageLoad() {
    this.loaded = true;
  }
  imageError() {
    this.loaded = true;
  }

  getColorAndText() {
    // if ((this.nutriScore >= 0 && this.nutriScore < 25)) {
    //   return { color: "#0BB852", text: "It is an excellent choice", text2: this.calories > 1.5 && this.foodSource.toLowerCase() != "internal" ? "But smaller portion is recommended" : "" };
    // } else if (this.nutriScore >= 25 && this.nutriScore < 50) {
    //   return { color: "#8BC73C", text: "It is a good Choice", text2: this.calories > 1.5 && this.foodSource.toLowerCase() != "internal" ? "But smaller portion is recommended" : "" };
    // } else if (this.nutriScore >= 50 && this.nutriScore < 65) {
    //   return { color: "#FFAE00", text: "it is an average choice.", text2: "Should be taken in moderation" };
    // } else if (this.nutriScore >= 65 && this.nutriScore < 80) {
    //   return { color: "#FF791F", text: "It is not a good choice. ", text2: "Can be taken in small portions" };
    // } else if (this.nutriScore >= 80) {
    //   return { color: "#FF2441", text: "It should be avoided.", text2: "Can be taken in small portions sometimes" };
    // }

    const nutriScore = this.displayNutriValue;
    if ((nutriScore >= 85)) {
      return { color: "#0BB852", text: "It is an excellent choice", text2: this.calories > 1.5 &&  this.foodSource.toLowerCase().toLowerCase() != "internal" ? "But smaller portion is recommended" : "" };
    } else if (nutriScore >= 70 && nutriScore < 85) {
      return { color: "#8BC73C", text: "It is a good Choice", text2: this.calories > 1.5 &&  this.foodSource.toLowerCase().toLowerCase() != "internal"? "But smaller portion is recommended" : "" };
    } else if (nutriScore >= 50 && nutriScore < 70) {
      return { color: "#FFAE00", text: "it is an average choice.", text2: "Should be taken in moderation" };
    } else if (nutriScore >= 25 && nutriScore < 50) {
      return { color: "#FF791F", text: "It is not a good choice. ", text2: "Can be taken in small portions" };
    } else if (nutriScore < 25) {
      return { color: "#FF2441", text: "It should be avoided.", text2: "Can be taken in small portions sometimes" };
    }
  }
}
