import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-fight-slider",
  templateUrl: "./fight-slider.page.html",
  styleUrls: ["./fight-slider.page.scss"]
})
export class FightSliderPage{
  @ViewChild("testSlider") slider;
  token="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlbWFpbCI6IjkxLTk5NTg0Njk4MzQiLCJkZXZpY2VJZCI6IjIxMzIxMzIxIiwiaWF0IjoxNjY4MjQ3NTI2fQ.aHS3MBjX_3yK-VXLUPTDXqvC1-seurwYStS4_iNIvo20miQg2RPSiCXbOaJHqB0l7oHq_RB6JnlP_Eof7R_haA";
  clientId="birla";
  type="1";
 slideIndex=0;
  constructor(private router: Router){
    localStorage.setItem("clientId",this.clientId);
      this.toggleAppTheme(this.clientId);
     
      localStorage.setItem("tkn",this.token);
  }
  toggleAppTheme(theme) {
    document.body.setAttribute('color-theme', theme);
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
