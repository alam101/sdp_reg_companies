import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { IonicModule, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-open-image-preview',
  templateUrl: './open-image-preview.component.html',
  styleUrls: ['./open-image-preview.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] 
})
export class OpenImagePreviewComponent implements OnInit {
   @Input() previewUrl: string | null = null;

  constructor(private modalCtrl: ModalController) {

  }

 retakeImage() {
    this.modalCtrl.dismiss({ confirmed: false });
  }

  confirmImage() {
    this.modalCtrl.dismiss({ confirmed: true });
  }
    ngOnInit() {
    
      console.log('Sanitized preview URL:', this.previewUrl);
    }

}
