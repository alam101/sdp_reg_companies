import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.page.html',
  styleUrls: ['./termsandconditions.page.scss'],
})
export class TermsandconditionsPage implements OnInit {
from;
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(res=>{
      this.from = res['from'];
    })
  }

  ngOnInit() {
  }
  goNext(){
    if(this.from){
    this.router.navigate(["boarding2"],{queryParams:{from: 'editProfile'}});
    }
    else{
      this.router.navigate(["boarding2"]);
    }
  }
}
