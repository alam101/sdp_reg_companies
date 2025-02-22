import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward-product',
  templateUrl: './reward-product.page.html',
  styleUrls: ['./reward-product.page.scss'],
})
export class RewardProductPage implements OnInit {
  itemIndex = localStorage.setItem("intemIndex","4");
  constructor() { }

  ngOnInit() {
  }

}
