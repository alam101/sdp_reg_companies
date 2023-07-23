import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-allow-popup',
  templateUrl: './allow-popup.component.html',
  styleUrls: ['./allow-popup.component.scss'],
})
export class AllowPopupComponent implements OnInit {
  @Output() confirmPopup = new EventEmitter();
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  cancel() {
    this.confirmPopup.emit(false);
    this.modalController.dismiss({isConfirm:true}, 'cancel');
  }

  confirm() {
    this.confirmPopup.emit(true);
    this.modalController.dismiss({isConfirm:true}, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
