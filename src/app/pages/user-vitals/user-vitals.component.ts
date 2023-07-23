import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Utilities } from 'src/app/services/utilities.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-user-vitals',
  templateUrl: './user-vitals.component.html',
  styleUrls: ['./user-vitals.component.scss']
})
export class UserVitalsComponent implements OnInit {
  name="";
  constructor(private storage:Storage,private readonly appService:AppService ,private utilities:Utilities,private router:Router) {
    this.utilities.initStorage(storage);
 } 

 back(event){
   console.log("back");
   
  window.history.back();
}
  ngOnInit(): void {
   let res =  localStorage.getItem("profileData");
      this.name=JSON.parse(res)?.profile?.name;
  }
  gotoNext(event){
    localStorage.setItem("vitals",JSON.stringify(event));
    this.router.navigate(['activity']);
  }
}
