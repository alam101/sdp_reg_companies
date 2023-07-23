import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "../../home-service/app.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { UTILITIES } from "../../core/utility/utilities";
import { Storage } from '@ionic/storage';
import { CONSTANTS } from '../../core/constants/constants';
@Component({
  selector: 'app-recipe-day',
  templateUrl: './recipe-day.component.html',
  styleUrls: ['./recipe-day.component.scss'],
})
export class RecipeDayComponent implements OnInit {

  // postArray=[];
  foodDetails={video:"",recipe:"",steps:"",Name:"",Calories:"", Carbs:"", Protien:"",Fat:"",Fiber:""};
  data:any={data:[{imageUrl:"",Food:"",Calories:"", Carbs:"", Protien:"",Fat:""}]};
  constructor(
    private storage:Storage,
    private appServices: AppService,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private utilities: UTILITIES) { 

    }

  ngOnInit() {
    if(CONSTANTS.country && CONSTANTS.country == "IND") this.loadData();
  }

  videoUrl: any;
  senitizedData(video) {

    console.log("videoUrls", video);
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  initData(res){
    let reqBody = {
        foodId: res.foodCode
      };
    this.appServices.fetchFood(reqBody).subscribe(
      res => {
      
        this.foodDetails = JSON.parse(JSON.stringify(res)).dietItem;
        console.log("fetchFood Response:", res);
        
        if (this.foodDetails && (this.foodDetails.video || this.foodDetails.video != "-")) {

          this.foodDetails.video = this.foodDetails.video
            .toString()
            .replace('"', "")
            .replace('"', "");
        }
        this.senitizedData(this.foodDetails.video);
        if (this.foodDetails){
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
        }
        
        // this.portion = this.foodDetails.portion;
      },
      err => {
        console.log("fetchFood error:", err);
      }
    );
  }
  loadData(){
    this.videoUrl="";
    let allData=[];
     let code=["156", 
     "015",
     "010",
    "383",
    "004",
    "003",
    "027",
    "054",
   "078",
   "083",
   "128",
    "129",
    "148",
    "149",
    "167",
    "169",
    "168",
    "172",
    "176",
    "254",
    "260",
    "271",
    "302",
    "304",
    "305",
    "306",
    "311",
    "313",
    "315",
   "324",
   "329",
   "372",
   "414",
"421",
"427",
"430"];
this.storage.get("recipeDate").then(resDate=>{
  if(resDate && new Date(resDate).getDate() == new Date().getDate() && new Date(resDate).getMonth() ==  new Date().getMonth()){
    this.storage.get("recipeDay").then(res=>{
      this.initData(res);
      // this.data = code[Number(res)];
      // console.log("repostArray",this.data);
      // // setTimeout(() => {
      // let reqBody = {
      //   foodId: this.data
      // };
      // this.appServices.fetchFood(reqBody).subscribe(
      //   res => {
        
      //     this.foodDetails = JSON.parse(JSON.stringify(res)).dietItem;
      //     console.log("fetchFood Response:", res);

      //     if (this.foodDetails.video || this.foodDetails.video != "-") {

      //       this.foodDetails.video = this.foodDetails.video
      //         .toString()
      //         .replace('"', "")
      //         .replace('"', "");
      //     }
      //     this.senitizedData(this.foodDetails.video);
      //     if (this.foodDetails.steps != null) {
      //       this.foodDetails.steps = this.foodDetails.steps.trim();
      //     }
      //     if (this.foodDetails.steps == "") {
      //       this.foodDetails.steps = "~";
      //     }
      //     if (this.foodDetails.recipe != null) {
      //       this.foodDetails.recipe = this.foodDetails.recipe.trim();
      //     }
      //     if (this.foodDetails.recipe == "") {
      //       this.foodDetails.recipe = "~";
      //     }
      //     // this.portion = this.foodDetails.portion;
      //   },
      //   err => {
      //     console.log("fetchFood error:", err);
      //   }
      // );
    });
  } else{
    this.appServices.getRecipeOfTheDay().then(
    res => {
      this.storage.set("recipeDate",new Date());
      this.storage.set("recipeDay",res);
      this.initData(res);
    })
    // let index="0";
    // this.storage.set("recipeDay",0);
    // this.storage.set("recipeDate",new Date());
    // this.storage.get("recipeDay").then(res=>{
    //   if(res=="0"){
    //     index="0";
    //   }
    //   else{
    //     index = res;
    //   }
    // });
    // if(code.length-1>=Number(index)){
    // this.data = code[Number(index)+1];
    //   console.log("repostArray",this.data);
    //   // setTimeout(() => {
    //    let reqBody = {
    //     foodId: this.data
    //   };
    //   this.appServices.fetchFood(reqBody).subscribe(
    //     res => {
    //       this.storage.set("recipeDay",index);
    //       this.storage.set("recipeDate",new Date());
          // this.foodDetails = JSON.parse(JSON.stringify(res)).dietItem;
          // console.log("fetchFood Response:", res);
  
          // if (this.foodDetails.video || this.foodDetails.video != "-") {
  
          //   this.foodDetails.video = this.foodDetails.video
          //     .toString()
          //     .replace('"', "")
          //     .replace('"', "");
          // }
          // this.senitizedData(this.foodDetails.video);
          // if (this.foodDetails.steps != null) {
          //   this.foodDetails.steps = this.foodDetails.steps.trim();
          // }
          // if (this.foodDetails.steps == "") {
          //   this.foodDetails.steps = "~";
          // }
          // if (this.foodDetails.recipe != null) {
          //   this.foodDetails.recipe = this.foodDetails.recipe.trim();
          // }
          // if (this.foodDetails.recipe == "") {
          //   this.foodDetails.recipe = "~";
          // }
    //       // this.portion = this.foodDetails.portion;
    //     },
    //     err => {
    //       console.log("fetchFood error:", err);
    //     }
    //   );
    // }
  }
});
    
      
   
   
  }

}
