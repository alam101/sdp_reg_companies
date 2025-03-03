import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward-deal',
  templateUrl: './reward-deal.page.html',
  styleUrls: ['./reward-deal.page.scss'],
})
export class RewardDealPage implements OnInit {
  itemIndex = localStorage.setItem("intemIndex","4");
  constructor() { }

  ngOnInit() {
  }

}
