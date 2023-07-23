import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsAnalysisComponent implements OnInit {
  items=[];
  constructor(private navParams:NavParams) {
    let rec = this.navParams.get('recommendedIn');
    rec.forEach(element => {
      if(element == 'H'){
        this.items.push("Hypertension");
      }
      if(element == 'T'){
        this.items.push("Thyroid");
      }
      if(element == 'S'){
        this.items.push("Sleeping disorder");
      }
      if(element == 'C'){
        this.items.push("Cholesterol");
      }
      if(element == 'A'){
        this.items.push("Acidity");
      }
      if(element == 'D'){
        this.items.push("Digestion");
      }
      if(element == 'Di'){
        this.items.push("Diabetes");
      }
      if(element == 'P'){
        this.items.push("Pcod");
      }
      if(element == 'B'){
        this.items.push("BP");
      }
    
    });
   }

  ngOnInit() {}

}
