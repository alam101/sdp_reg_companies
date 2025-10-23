import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ai-diet-recall-summary',
  templateUrl: './ai-diet-recall-summary.component.html',
  styleUrls: ['./ai-diet-recall-summary.component.scss'],
})
export class AiDietRecallSummaryComponent implements OnInit {
editingIndex: number | null = null;
 @Input() items:any;
 
    recallSummary = [];
    labels = [
      'How you start the day',
      'Breakfast',
      'Mid day',
      'Lunch',
      'Evening',
      'Dinner',
      'Post dinner'
    ];
    icons=[
      'cafe-outline',
      'bread-outline',
      'nutrition-outline',
     'restaurant-outline',
     'beer-outline', 
     'fast-food-outline',
     'cup-outline'
    ]
   
  constructor(private modalController: ModalController){

  }
  ngOnInit(): void {
    console.log("fix:---",this.items);
    
     this.labels.forEach((label, i) => {
      this.recallSummary.push({label:label,icon:this.icons[i],value:this.items?.recall[i]});
    });
    console.log("this.recallSummary", this.recallSummary);
  }

  editSection(index: number) {
    this.editingIndex = index;
  }

  saveEdit(index: number) {
    this.editingIndex = null;
  }

  cancelEdit() {
    this.editingIndex = null;
  }

  startOver() {
    localStorage.removeItem('recallResponses');
    this.recallSummary.forEach((r) => (r.value = 'none')); 
    this.modalController.dismiss({apiCall:false});
  }
  continue() {
    this.modalController.dismiss({apiCall:true,data:this.recallSummary});
  }

  
}
