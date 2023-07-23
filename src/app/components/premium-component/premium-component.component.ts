import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  NavController } from '@ionic/angular';
import moment from "moment";
import { UTILITIES } from 'src/app/core/utility/utilities';
import { AppService } from 'src/app/home-service/app.service';
import { AppService as APPSERVICE } from 'src/app/services/app.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-premium-component',
  templateUrl: './premium-component.component.html',
  styleUrls: ['./premium-component.component.scss'],
})
export class PremiumComponentComponent implements OnInit {
  width = window.screen.width - 80;
  couponList: any = [];
  @ViewChild("testSlider") slider;
  slideIndex: any;
  parseInt: any = parseInt;
  premiumPlan: any = [];
  ultraPlan: any = [];
  testimonyData: any;
  isIosDevice = this.utility.isDeviceiOS();
  isAndroidDevice = this.utility.isDeviceAndroid();
  userEmail = localStorage.getItem("custId") ;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.2,
    centeredSlides: true,
  };

  constructor(
    private appservice: AppService,
    private utility: UTILITIES,
    
    private router:Router,
    private appS: APPSERVICE,
    private iab: InAppBrowser
   ) {
    this.getPlanDetail();
  }
  goBack() {
    this.router.navigate(['final-boarding']);
  }

  getClientTestimonyList() {
    this.appservice.getClientTestimony().subscribe(
       (res: any) => {
         console.log("s", res);
         this.testimonyData = res.sdpClientTestimony;
         console.log("this.testimonyData.videoURL", this.testimonyData.videoURL);
      },
       (err) => {
         console.log(err);
         this.utility.hideLoader();
       }
     );
   }
 
  ngOnInit() {
   
    setTimeout(()=>{
      this.getPlanDetail();
      this.getClientTestimonyList();
    },1000);
   // this.getUltraPlanDetail();
  }
  openLink(link) {
    this.iab.create(link, "_blank", "location=yes");
  }
  getUltraPlanDetail() {
    this.utility.showLoadingForASecond();
    this.appservice.getUltraCouponList().subscribe(
      (res: any) => {
        console.log(res);
        this.utility.hideLoader();
        this.ultraPlan = res.couponList;
        this.ultraPlan = this.ultraPlan.sort((a, b) => {
          return a.discountedAmount - b.discountedAmount;
        });
        console.log(this.ultraPlan);
      },
      (err) => {
        console.log(err);
        this.utility.hideLoader();
      }
    );
  }

  getPlanDetail() {
    this.utility.showLoadingForASecond();
    this.appservice.getCouponList().subscribe(
      (res: any) => {
        console.log("paytm:-",res);
        this.utility.hideLoader();
          console.log(":)",res.couponList[0]);
        this.couponList = res.couponList;
      },
      (err) => {
        console.log(err);
        this.utility.hideLoader();
      }
    );
  }


  intialtransaction(discountedAmount){
    localStorage.setItem("payment","");
      const payload = {
        amount:discountedAmount+'',
        custId: localStorage.getItem("custId")
      }
      console.log(payload);
    this.appS.initialTransactions(payload).subscribe(res=>{
      const requestObject = {
        "amount": discountedAmount+'',
        "orderId": res.body.orderId==undefined?"0071490615":res.body.orderId,
        "txnToken":  res.body.txnToken,
        "mid": res.body.mid==undefined?"ABCdj00008000000":res.body.mid,
    }
     console.log(requestObject);
     
      ready(()=> {
       let  date = moment(new Date().setDate(new Date().getDate() + 30)).format("DD-MMM-YYYY");
        let body = {
          expiryDate: date,
          amount: discountedAmount,
        };
        window['JSBridge'].call('paytmPayment', requestObject,(result) =>{
          if(result["data"]!=false || result["data"]!=""){
          this.appS.updateExpiryDate(body).then(
            (res) => {
              localStorage.setItem("payment","success");
            },err=>{
              localStorage.setItem("payment","");
              alert(err);
            });
          }
          else{
            localStorage.setItem("payment","");
            return;
           }
             },
             err=>{
              localStorage.setItem("payment","");
               alert("authenticateInternal err"+JSON.stringify(err));
             }
             );
            
          });
        });
   
        const interval = setInterval(()=>{
          if(localStorage.getItem("payment")=="success"){
            clearInterval(interval);
            this.router.navigate(['/new-diet']);
          }
      },500);

  }

  openFB(){
    let url = "https://www.facebook.com/smartdietplanner"; 
    this.iab.create(url , '_system');
  }
  openInsta(){
    let url = "https://www.instagram.com/smartdietplanner/"; 
    this.iab.create(url , '_system');
    
  }
  openDilar(){
    let url = "tel:+919999118595"; // add the links to body
    this.iab.create(url , '_system');
  }
  links : any[]= [""];
  sendEmail(){
    let url = "mailto:admin@smartdietplanner.com?subject=Support profile id:('"+this.userEmail+"')&body="+this.links.join(" ,"); // add the links to body
       this.iab.create(url , '_system');
  }
  
  openWhatsApp(){
    if(this.isIosDevice){
      let url = "https://api.whatsapp.com/send?phone=+919999118595&&text=My profile id is '"+ this.userEmail +"'. I need support.";
      this.iab.create(url , '_system');
    }else{
      let url = "whatsapp://send?phone=+919999118595&text=My profile id is '"+ this.userEmail +"'. I need support.";
      this.iab.create(url , '_system');
    }
  }
}

function ready(callback) { 
  if (window["JSBridge"]) {
      callback && callback();
  } else {
      document.addEventListener('JSBridgeReady', callback, false);
  }
 
}
