import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-level',
  templateUrl: './icon-level.page.html',
  styleUrls: ['./icon-level.page.scss'],
})
export class IconLevelPage implements OnInit {
itemIndex=1;
  constructor() { }

  ngOnInit() {
  }
  itemClicked(index){
    this.itemIndex=index;
  }
}
