import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CONSTANTS, constantsJson} from '../core/constants/constants';

@Component({
  selector: "app-fight-slider",
  templateUrl: "./fight-slider.page.html",
  styleUrls: ["./fight-slider.page.scss"]
})
export class FightSliderPage{
  @ViewChild("testSlider") slider;
  token: any; //="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlbWFpbCI6IjkxLTk5NTg0Njk4MzQiLCJkZXZpY2VJZCI6IjIxMzIxMzIxIiwiaWF0IjoxNjY4MjQ3NTI2fQ.aHS3MBjX_3yK-VXLUPTDXqvC1-seurwYStS4_iNIvo20miQg2RPSiCXbOaJHqB0l7oHq_RB6JnlP_Eof7R_haA";
  clientId: any = "";
  type="1";
 slideIndex=0;
  clientDataImage: boolean;
  customerId: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(res => {
      // res = {
      //   token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlbWFpbCI6IjkxLTk5NTg0Njk4MzQiLCJkZXZpY2VJZCI6IjIxMzIxMzIxIiwiaWF0IjoxNjY4MjQ3NTI2fQ.aHS3MBjX_3yK-VXLUPTDXqvC1-seurwYStS4_iNIvo20miQg2RPSiCXbOaJHqB0l7oHq_RB6JnlP_Eof7R_haA",
      //   customerId: "aaasjdi123399",
      //   clientId: "birla",
      //   // clientId: "plix",
      //   type: 1
      // }
      if (res && !res.clientId) {
        this.clientDataImage = true;
      }else {
        let clientObj = constantsJson.VerifyClient.filter((ele) =>{
          return ele.clientId == res.clientId;
        })
        if(clientObj && clientObj.length){
          let customerUrl = clientObj[0]['apiUrl'];
          localStorage.setItem("clientId", res.clientId);
          this.toggleAppTheme(res.clientId, res, customerUrl);
        }else{
          this.clientDataImage = true;
        }
      } 
      
      // else if (res && res.clientId && res.customerId && res.type) {
      //   localStorage.setItem("clientId", res.clientId);
      //   this.toggleAppTheme(res.clientId, res);
      // } else {
      //   this.toggleAppTheme(res.clientId, res);
      //   this.clientDataImage = true;
      // }
      // this.toggleAppTheme(res.clientId);
    });
  }

  toggleAppTheme(theme, res?, customerUrl?) {
    document.body.setAttribute('color-theme', theme);
    if (res) {
      this.clientDataImage = false;
      // localStorage.setItem("tkn", res.token);
      localStorage.setItem("customerId", res.customerId);
      this.clientId = res.clientId;
      // this.token = res.token;
      this.customerId = res.customerId || "";
      this.router.navigate(["login"], {
        queryParams: {
          type: res.type,
          // token: this.token,
          clientId: this.clientId,
          customerId: this.customerId,
          customerUrl: customerUrl || ""
        },
      });
    }
  }
  
  back() {
    this.slider.slidePrev();
  }
  forward() {
    this.slider.slideNext();
  }
 skip(){
  this.router.navigate(["/login"]);
 }
  do_getActiveSlide(e: any) {
    this.slider.getActiveIndex().then((index: number) => {
      this.slideIndex= index;
      console.log("Current active slide index", index);
    });
  }

  next() {
    if(this.slideIndex<3){
      this.slider.slideNext();
    }
    else{
      this.router.navigate(["/login"]);
    }
    
  }

}
