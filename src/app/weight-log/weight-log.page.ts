import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
 
  selector: 'app-weight-log',
   standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './weight-log.page.html',
  styleUrls: ['./weight-log.page.scss'],
})
export class WeightLogPage implements OnInit, AfterViewInit {
  @Input()logDate: String ="";
  @Input()logWeight:String='';
  isShow=false;
  validateWeight=0;
  profileData: any;

  constructor(
    private appService: AppService,
    private utilities: UTILITIES,
    private modalController: ModalController,
    private cdr: ChangeDetectorRef, private activatedRoute: ActivatedRoute) {
      this.activatedRoute.data;
    }
  ionViewWillEnter(){
    this.logDate = new Date().toISOString();
    this.logWeight = undefined;
    this.validateWeight=0;
  }
  ngOnInit() {
    console.log('Weight:', this.logWeight);
    
    this.logDate = new Date().toISOString();
     this.logWeight = undefined;
    this.validateWeight=0;
    
  }
  ngAfterViewInit(): void {
       this.cdr.detectChanges();
  }
  formatDate(date: Date): string {
    return date.toLocaleDateString('en-GB'); 
  }
  onDateChange(event: any) {
    this.logDate = event.detail.value;
    console.log(this.logDate);
  }
  async addHealthData() {
    console.log("this.logWeight", this.logWeight);
    
    let obj = {
      "date": this.logDate,
      "userId": this.profileData.profile.email,
      "createdBy": null,
      "weightKg": this.logWeight
    }
    console.log("this.logWeight", this.logWeight);
    if(this.logWeight?.toString()?.trim()===undefined){
      this.isShow=true;
      return;
    }
    this.appService.addHealthData(obj).then((res) => {
      this.utilities.showSuccessToast('Weight logged successfully');
      console.log('getHealthData response: ', res);
      this.logWeight = '';
      // this.logDate = "";
      this.modalController.dismiss(true);
    }).catch(err => {
        this.utilities.showErrorToast('Can not log weight data.');
      });
  }

  close() {
    this.modalController.dismiss();
  }

}
