import { CommonModule, Location } from "@angular/common";
import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonicModule, ModalController, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AppService } from "../app.service";
import  compJson from '../../../assets/comp_config.json';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UTILITIES } from "src/app/core/utility/utilities";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-boarding",
  templateUrl: "./boarding.page.html",
  standalone:true,
  imports: [CommonModule, IonicModule, FormsModule],
  styleUrls: ["./boarding.page.scss"],
})
export class BoardingPage implements OnInit,AfterViewInit {
  from:any="";
  data: any;
clientId="";
  constructor(
    private iab: InAppBrowser,
    private navCtrl: NavController,
    private router: Router,
    private utilities: UTILITIES,
    private appservice: AppService,
    private storage: Storage,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(res=>{
      this.from = res['from'];
    });
    console.log("localStorage.getItem('clientId')",localStorage.getItem('clientId'));
    
    this.clientId=localStorage.getItem('clientId');
    this.newModal = localStorage.getItem("goals");
  }

  ngOnInit() {
    console.log("clientConfig:-", compJson);
    const dt = compJson.filter((item,index)=>{
      console.log("clientConfig:-", compJson);
        return Object.keys(item)[0].toLowerCase()===localStorage.getItem("clientId").toLowerCase();
      });

    this.data = dt[0][`${localStorage.getItem("clientId").toLowerCase()}`]["goals"];
    console.log(" this.data", this.data);
  }
  goBack() {
   if(this.from){
    this.router.navigate(['new-profile']);
   }
   else{
    this.storage.remove("pendingPage");
    this.navCtrl.navigateRoot(["/boarding1"]);
   }
    
  }

  ngAfterViewInit() {
 
  }

  newModal;
  goNext() {
    let reqBody: any = {};
    let reqBodyDiet: any = {};
    if(this.newModal==="undefined"){
      this.utilities.showErrorToast("Please select goal.");
        return false;
    }
    reqBody.dietPlanType = this.newModal;
    reqBodyDiet.dietPlanName = this.newModal;
    reqBody.category = this.newModal;
    reqBody.subCategory = this.newModal;

    localStorage.setItem("goals",reqBody.dietPlanType);
    console.log(reqBody);
    this.appservice.updateProfile(reqBody).then((success) => {
      this.appservice.dietPlan(reqBodyDiet).then((res) => {
        if (this.from) {
          this.router.navigate(["/new-profile"]);
        }
        else{
        this.storage.set("pendingPage", "/boarding2");
        this.router.navigate(["/boarding2"]);
        }
      });
    });
  }

  modalClose(){
      this.router.navigate(["/new-profile"]);
   }
}
