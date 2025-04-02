import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CONSTANTS } from '../core/constants/constants';
import { PortionCountPage } from '../alternate-diet/portion-count/portion-count.page';
import { ModalController, NavController } from '@ionic/angular';
import { UTILITIES } from '../core/utility/utilities';
import { BroadcastService } from '../broadcast.service';
import moment from 'moment';
import { SelectslotPopupPage } from '../selectslot-popup/selectslot-popup.page';

@Component({
  selector: 'app-search-auto',
  templateUrl: './search-auto.page.html',
  styleUrls: ['./search-auto.page.scss'],
})
export class SearchAutoPage implements OnInit {
  searchValue="chilli";
  searchData=[];
   @Input() data: any = {};
    @Input() loaded = false;
    @Input() slot = false;
    customerId: any;
    totalCal: number = 0;
    moment: any = moment;
    parseFloat: any = parseFloat;
    Math: any = Math;
    image_URL = "";
    currentDateIndex: any = 0;
  constructor( private appService: AppService, private utilities: UTILITIES,
      private modalCtrl: ModalController,
      private navCtrl: NavController,
      private broadcastService:BroadcastService) { }

  ngOnInit() {
   // this.searchAllApiData("",1);
  }
    searchAllApiData(searchValue,index){
      setTimeout(() => {
        this.appService.searchAuto(searchValue).subscribe((res:any)=>{
          this.searchData=res["data"].foodItems;
          console.log("this.searchData",this.searchData);
          
      },err=>{
        console.log("err",err);
        
      })
      }, 3000);
      
    }

      async addCal(d) {
        debugger;
        if (this.slot) {
          const modal = await this.modalCtrl.create({
            component: PortionCountPage,
            cssClass: "portion_count",
            componentProps: {
              alterdata: this.data,
              type: "add",
            },
            backdropDismiss: true,
            swipeToClose: true,
          });
          await modal.present();
          const modaldata = await modal.onDidDismiss();
          const d = modaldata?.data;
          console.log(d);
          if (d) {
            const datas = {
              date: CONSTANTS.dietDate,
              foodCodeList: [
                {
                  code: d._id,
                  portion: Number(d.portion),
                  eaten: 2,
    
                  foodSource: d.foodSource,
                },
              ],
              slot: Number(this.slot),
              isUpdateDiet: true,
            };
            console.log("datas", datas);
            this.appService.postOptionFoodList1(datas).then(
              (res) => {
                console.log("food code update", res);
                // this.modalCtrl.dismiss({});
                // if (d?.imgType === "H") {
                  this.utilities.logEvent("onboarding_Click_search_whats_on_your_mind", {});
                // } else
    
                this.utilities.closeModal();
               // this.messageSubject.next('reload');
                this.broadcastService.boradcast("reload");
                this.navCtrl.navigateForward([
                  "/new-diet",
                  { refresh: new Date().getTime() },
                ]);
              },
              (err) => {
                console.log(err);
              }
            );
          }
          console.log("slot", this.slot);
          return;
        }
        this.data = d;
        console.log("TEST---", d);
        const modal = await this.modalCtrl.create({
          component: SelectslotPopupPage,
          cssClass: "small-modal-slot",
          backdropDismiss: true,
          swipeToClose: true,
        });
    
        await modal.present();
        const modaldata = await modal.onDidDismiss();
        const slot = modaldata?.data;
        this.data.slot = slot.slot;
        if (slot) {
          debugger;
          const modal = await this.modalCtrl.create({
            component: PortionCountPage,
            cssClass: "portion_count",
            backdropDismiss: true,
            swipeToClose: true,
            componentProps: {
              alterdata: this.data,
              type: "add",
            },
          });
          await modal.present();
          const modaldata = await modal.onDidDismiss();
          const d = modaldata?.data;
          if (d) {
            const datas = {
              date: CONSTANTS.dietDate,
              foodCodeList: [
                {
                  code: d._id,
                  portion: Number(d.portion),
                  eaten: 2,
    
                  foodSource: d.foodSource,
                },
              ],
              slot: Number(slot.slot),
              isUpdateDiet: true,
            };
            console.log("datas", datas);
            this.appService.postOptionFoodList1(datas).then(
              (res) => {
                console.log("food code update", res);
                // this.modalCtrl.dismiss({});
                this.utilities.closeModal();          
                this.broadcastService.boradcast("reload");
                this.navCtrl.navigateForward([
                  "/new-diet",
                  { refresh: new Date().getTime() },
                ]);
              },
              (err) => {
                console.log(err);
              }
            );
          }
          console.log("slot", slot);
        }
      }
}
