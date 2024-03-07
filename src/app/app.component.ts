import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './services/app.service';
import {Storage} from '@ionic/storage-angular';
import { Utilities } from './services/utilities.service';
import { UTILITIES } from './core/utility/utilities';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'homeScreen';
  selectedTheme:String;
  isOnline: boolean;
  constructor(private util: UTILITIES, private settings:SettingsService,private routerActive:ActivatedRoute,private router: Router,private appService:AppService,private storage:Storage,private utilities:Utilities) {
    this.utilities.initStorage(this.storage);

    const clientId = localStorage.getItem("clientId");
    this.toggleAppTheme(clientId);

  }
  ngOnInit(){
    this.isOnline = navigator.onLine;
    window.addEventListener('online', () => {
      this.isOnline = true;
    });

    window.addEventListener('offline', () => {   
      this.isOnline = false;
      this.util.presentAlert("Internet not available! Please check you internet connection/speed!");
    });
  }
  toggleAppTheme(theme) {
    document.body.setAttribute('color-theme', theme);
  }

}
