import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './services/app.service';
import {Storage} from '@ionic/storage-angular';
import { Utilities } from './services/utilities.service';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homeScreen';
  selectedTheme:String;
 
  constructor(private settings:SettingsService,private routerActive:ActivatedRoute,private router: Router,private appService:AppService,private storage:Storage,private utilities:Utilities) {
    this.utilities.initStorage(this.storage);

    const clientId = localStorage.getItem("clientId");
    this.toggleAppTheme(clientId);

  }
  toggleAppTheme(theme) {
    document.body.setAttribute('color-theme', theme);
  }

}
