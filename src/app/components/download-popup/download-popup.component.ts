import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-download-popup',
  templateUrl: './download-popup.component.html',
  styleUrls: ['./download-popup.component.scss'],
})
export class DownloadPopupComponent implements OnInit {
  @Output() gotoNextEvent = new EventEmitter<boolean>();
  button={class:'button button-color outline button-full', mode:'ios', shape:'round'};
  buttonPre={class:'button button-outline outline button-full', mode:'ios', shape:'round'};
  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  cancel(evet){
    this.modalController.dismiss();
  }
  gotoNext(evet){
  localStorage.setItem("isDownload","1");
  this.modalController.dismiss();
  }
}
