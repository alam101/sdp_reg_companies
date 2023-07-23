import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {

  @Input('imgPath') imgPath = './assets/icons/Group 145.svg';
  @Input('totalPage') totalPage = 0;
  @Input('pageIndex') pageIndex = 0;
  @Input('title') title = "Basic Info";
  @Input('showProgress') showProgress = true;
  progress = 20;
  PendingProgress = 80;
  constructor() { }



  ngOnInit() {
    this.progress = Math.round(this.pageIndex * 100 / this.totalPage);
    this.PendingProgress = 100 - this.progress;
  }

}
