import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { Utilities } from 'src/app/services/utilities.service';
import { Storage } from '@ionic/storage-angular';
import { SettingsService } from 'src/app/services/settings.service';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit,OnDestroy {

  registrationObj=Observable;
  selectedTheme:String;
  constructor(private settings:SettingsService,private storage:Storage,private readonly appService:AppService,private utilities:Utilities,private readonly router:Router) { 
    this.utilities.initStorage(storage);
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  ngOnInit(): void {
     }
  ngOnDestroy(): void {
    //  this.registrationObj
  }

}
