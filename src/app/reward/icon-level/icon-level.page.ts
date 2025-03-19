import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-icon-level',
  templateUrl: './icon-level.page.html',
  styleUrls: ['./icon-level.page.scss'],
})
export class IconLevelPage implements OnInit {
itemIndex=1;
levelData:any;
transactionData:any;
activeHeaderIndex=1;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getLevel();
    this.getActionTransactions();
    this.itemIndex = this.levelData.level;
    if(this.levelData.level===1 || this.levelData.level===2 || this.levelData.level===3){
      this.activeHeaderIndex=1;
    }
    else if(this.levelData.level===14 || this.levelData.level===5 || this.levelData.level===6){
      this.activeHeaderIndex=2;
    }
    else if(this.levelData.level===7 || this.levelData.level===8 || this.levelData.level===9){
      this.activeHeaderIndex=3;
    }
    else{
      this.activeHeaderIndex=4;
    }
  }
  itemClicked(index){
    this.itemIndex=index;
  }
  getActionTransactions(){
    this.appService.game_GetLevel('9945419159').then((res:any)=>{
      this.transactionData = res.data;
    },err=>{

    })
  }
  getLevel(){
    this.appService.game_GetLevel('metropolis@2025').then((res:any)=>{
      this.levelData = res.data[0];
    },err=>{

    })
  }
}
