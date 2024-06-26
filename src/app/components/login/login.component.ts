import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Storage } from "@ionic/storage";
import { message, CONSTANTS, ProfileInfo, APIS } from '../../core/constants/constants';
import { UTILITIES } from 'src/app/core/utility/utilities';
import { constantsJson} from '../../core/constants/constants';

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1
  };
  @ViewChild("testSlider") slider;
  slideIndex: any;
  token: any; //="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlbWFpbCI6IjkxLTk5NTg0Njk4MzQiLCJkZXZpY2VJZCI6IjIxMzIxMzIxIiwiaWF0IjoxNjY4MjQ3NTI2fQ.aHS3MBjX_3yK-VXLUPTDXqvC1-seurwYStS4_iNIvo20miQg2RPSiCXbOaJHqB0l7oHq_RB6JnlP_Eof7R_haA";
  clientId = "";
  type="1";
  isModalOpen = false;
  currentCountryCode = "in";
  phoneNumber;
  customerId: any;
  customerUrl:any;
  authUrl:any;
  showErrorMsg: boolean = false;
  clientKey: any;
  supportNumber: any;
  supportUrl: any;

  constructor(
    private loading:LoadingController,
    private routerActive:ActivatedRoute,
    private router: Router,
    private appService:AppService,
    private storage:Storage,
    private modalController:ModalController,
    private utilities: UTILITIES
    ) {
    if(this.token=="" || !this.token)
    {      
      this.routerActive.queryParams.subscribe(res=>{
       console.log("res",res.token);
       localStorage.setItem("firstday","");
      //  this.token = res.token;
       this.supportNumber = res.supportNumber;
       this.type = res.type;
       this.clientId = res.clientId || res.clientid;
       this.customerUrl = res.customerUrl;
       this.authUrl = res.authUrl;
       this.clientKey = res.clientKey;
      if(this.clientId==undefined){
       this.clientId =localStorage.getItem("clientId")
       }
       else{
        localStorage.setItem("clientId",this.clientId);
       }
       this.type=res.type;
       this.toggleAppTheme(this.clientId);
       this.storage.set("type",this.type);
        if(this.token){
          localStorage.setItem("tkn",this.token);
        }
        
        this.supportUrl = `https://api.whatsapp.com/send?phone=${this.supportNumber}&text=''`;
      });
    }
    else{
      localStorage.setItem("clientId",this.clientId);
      this.toggleAppTheme(this.clientId);
      localStorage.setItem("customerId", this.customerId);
      localStorage.setItem("tkn",this.token);
    }
    // this.customerId = "aaasjdi123399";
    // localStorage.setItem("customerId", this.customerId);
  }
  toggleAppTheme(theme) {
    document.body.setAttribute('color-theme', theme);
  }
  isConfirm:boolean=false;
  
  cancel(){
    this.isConfirm=false;
    this.setOpen(false);
    this.setOpenDeny(true);
  }
  denyCancel(){
    this.isDenyModal = false;
  }
  denyOk(){
    this.isDenyModal = false;
    this.setOpen(true);
  }
  isDenyModal:boolean=false;
  setOpenDeny(isOpen: boolean) {
    this.isDenyModal = isOpen;
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.appService.getCurrentLocation().then((location: any) => {
      this.utilities.hideLoader();
      if(location && location["country_code"] && location["country_name"]){
        this.currentCountryCode = location["country_code"].toLowerCase();
        CONSTANTS.location_country = location["country_name"];
      }
    });
  }
// signIn(){
//   this.loadLogin();
//   const interval = setInterval(()=>{
//   if(localStorage.getItem("accesstoken")!=""){
//    clearInterval(interval);
//     this.router.navigate(["/read"],{queryParams:{token:`${localStorage.getItem("accesstoken")}`,clientId:'birla',type:1}});
//   }
// },500);
// }

  verifyWithClient(phoneNumber) {
    if (!phoneNumber) {
      this.utilities.showErrorToast("Please enter phone number");
      return false;
    }
    let phoneNumberBlock = phoneNumber.internationalNumber.split(/ (.*)/);
    let countryCode = phoneNumberBlock[0].match(/\d+/g).join("");
    let phonNumber = phoneNumberBlock[1].match(/\d+/g).join("");
    let phoneNumberStr = countryCode + "-" + phonNumber;
    if (phonNumber.length != 10) {
      this.utilities.showErrorToast("Please enter valid phone number");
      return false;
    } else {
      let obj = {
        "query": `query{  fitrofy(phone:\"+${countryCode}${phonNumber}\"){    validCustomer    orderId    errorMessage  }}`,
        "variables": {}
      }
      this.appService.verifyClientSpecific(this.customerUrl, obj).then((verifyClientSpecificResponse: any) => {
        if (verifyClientSpecificResponse && verifyClientSpecificResponse.data && verifyClientSpecificResponse.data.fitrofy && verifyClientSpecificResponse.data.fitrofy.orderId) {
          let orderId = verifyClientSpecificResponse.data.fitrofy.orderId;
          localStorage.setItem('orderId', orderId);
          this.signIn(phoneNumber);
        } else {
          this.showErrorMsg = true;
          return false;
        }
      })
        .catch(verifyClientSpecificError => {
          console.log('verifyClientSpecificError: ', verifyClientSpecificError);
        })
    }
  }

  signIn(phoneNumber, customerID?) {
    this.utilities.logEvent("Login-with_Phone", {});
    if (phoneNumber["dialCode"] == "+91" || phoneNumber["isoCode"] == "in") {
      let phoneNumberBlock = phoneNumber.internationalNumber.split(/ (.*)/);
      let countryCode = phoneNumberBlock[0].match(/\d+/g).join("");
      let phonNumber = phoneNumberBlock[1].match(/\d+/g).join("");
      let phoneNumberString = countryCode + "-" + phonNumber;
      let number = phoneNumber.internationalNumber.replaceAll(" ", "");
      this.sendOTP(phoneNumber, phoneNumberString, customerID);
    }
  }

  sendOTP(phone, phoneNumberString, customerID?) {
    this.utilities.logEvent("login_otp_send", {});
    // this.utilities.showLoading();
    this.appService
      .sendOTP({ customerId: phoneNumberString })
      .then((succ) => {
        this.utilities.hideLoader();
        this.router.navigate(["corporate-otp"], {
          queryParams: {
            email: phoneNumberString,
            phoneDetails: JSON.stringify(phone),
            customerID: customerID || "",
            clientKey: this.clientKey
          },
        });
      })
      .catch((err) => {
        this.utilities.hideLoader();
        console.log("rrr", err);
      });
  }

  loadLogin(){
    localStorage.setItem("accesstoken","");
    ready(()=> {
      
      window['JSBridge'].call('paytmFetchAuthCode', {
            clientId: "smart-diet-planner"
        },(result) =>{
            let someStr = result?.data?.authId;   
            this.appService.authenticateInternal("paytm9145",someStr).subscribe(res=>{
              localStorage.setItem("custId",res.userId);
              if(res["access_token"]){
                localStorage.setItem("accesstoken",res["access_token"]);
                this.dismissLoader();
              }
              else{
                this.dismissLoader();
                localStorage.setItem("accesstoken","");
              }
              
           },
           err=>{
            this.dismissLoader();
             alert("authenticateInternal err"+JSON.stringify(err));
           });

        },(err)=>{
          this.dismissLoader();
          alert(err);
         
        });

      });
  }
  async presentLoadingCustom() {
    this.loading.create({
      message: ''
  }).then((response) => {
      response.present();
  }); 
  }

  dismissLoader() {
    this.loading.dismiss().then((response) => {
        console.log('Loader closed!', response);
    }).catch((err) => {
        console.log('Error occured : ', err);
    });
}
  bindProfileDatainDefaultData(resData){
      const gender = resData?.demographic?.gender;
      const height = resData?.demographic?.height;
      const suggestedweight = resData?.demographic?.suggestedWeight;
      const weight = resData?.demographic?.weight;
      const age = resData?.demographic?.age;
      const activities = resData?.lifeStyle?.activities;
      const diseases = resData?.lifeStyle?.diseases;
      const communities = resData?.lifeStyle?.communities;
      const foodPref = resData?.lifeStyle?.foodType; 
      this.storage.get("defaultData").then(res=>{
          res= JSON.parse(res);
        if(gender){
       res.otherMaster.gender.filter(item=>{
          return item.code ===gender["code"];
        })[0].isSelected=true;
      }

      if(age){
        age.year=(new Date().getFullYear()-age.avg_age).toString();
        res.age=age;
      }
      if(height){
        res.otherMaster.height.push(height);
        console.log("res.otherMaster.gender",res.otherMaster.gender);
      }
      if(suggestedweight){
        res.otherMaster.diet = {suggestedWeight:suggestedweight,param:''};
      }
      if(weight){
        res.otherMaster.weight.push(weight);
      }
      if(activities){
        res.otherMaster.activities.filter(item=>{
          return item.code ===activities["code"];
        })[0].isSelected=true;
      }
      if(diseases){
        for (let index = 0; index < diseases.length; index++) {
        res.otherMaster.diseases.filter((item)=>{
             if(item.code === diseases[index]){
              item.isSelected=true;
             }
          });
         
        }
       
      }
      if(communities){
        for (let index = 0; index < communities.length; index++) {
          res.otherMaster.community.filter((item)=>{
               if(item.code === communities[index]){
                item.isSelected=true;
               }
            });
           
          }
      }
      if(foodPref){
          res.otherMaster.foodPref.filter((item)=>{
               if(item.code === foodPref){
                item.isSelected=true;
               }
            });
      }
      

      this.storage.set("localData",JSON.stringify(res));

      console.log("updated local data:--",res);
      console.log("response profile",resData);
      if(resData.code=="0001"){
        if(localStorage.getItem("default")==null || localStorage.getItem("default")=='' || localStorage.getItem("default")==undefined){
          // this.router.navigate(['/fight-slider']);
        }
        else{
          this.router.navigate(['/boarding1']);
        }
        
        return;
      }
      else{
      localStorage.setItem("userid",resData?.profile?.email);
      }
      setTimeout(() => {
        this.dismissLoader();
      }, 2000);
    
      const localProfileObject = JSON.parse(localStorage.getItem("profileData"))
      
      if(localProfileObject?.diet){
        this.appService.getOnePlan().subscribe(res=>{
          console.log("getoneplan()",res);
          if(res["profile"]["planType"]==undefined){
            this.router.navigate(['/boarding1']);
          }
         if(res["profile"]["planType"]==="Freemium"){
            this.router.navigate(['/final-boarding']);
          }
          else{
            this.router.navigate(['/new-diet']);
          }
        },err=>{
          this.router.navigate(['/boarding1']);
        });
      }
      else if(resData.diet==undefined || !resData.diet || resData.diet==null){
        this.router.navigate(['/boarding1']);
      }
     

    });

   
  }


  testingforPraveen(){
    alert(localStorage.getItem("paytmFetchAuthCode"));
  }


}

function ready(callback) { 
  if (window["JSBridge"]) {
      callback && callback();
  } else {
      document.addEventListener('JSBridgeReady', callback, false);
  }
 
}
