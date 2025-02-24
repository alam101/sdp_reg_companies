import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward-deal-confirmed',
  templateUrl: './reward-deal-confirmed.page.html',
  styleUrls: ['./reward-deal-confirmed.page.scss'],
})
export class RewardDealConfirmedPage implements OnInit {
  itemIndex = localStorage.setItem("intemIndex","4");
  constructor() { }

  ngOnInit() {
  }

}
