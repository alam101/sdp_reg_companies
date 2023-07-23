import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-close-profile',
  templateUrl: './close-profile.component.html',
  styleUrls: ['./close-profile.component.scss'],
})
export class CloseProfileComponent implements OnInit {

  constructor(public alertController: AlertController,private router: Router) { }

  ngOnInit() {}
  async presentAlertConfirm(message) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message: message,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
           }
        },
        {
          text: "Continue",
          handler: () => {
            this.router.navigate(['consume']);
          }
        }
      ]
    });

    await alert.present();
  }
  gotoHome(){
    this.presentAlertConfirm("Updated information is saved at last step. Please Continue till last step to update it. Cancel to exit if you do not want to update.");
  }
}
