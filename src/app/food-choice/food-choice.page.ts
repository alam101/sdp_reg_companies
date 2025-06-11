import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-food-choice',
  templateUrl: './food-choice.page.html',
  styleUrls: ['./food-choice.page.scss'],
})
export class FoodChoicePage implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
this.loadData();
  }
 personalise:any;
  loadData(){
    this.appService
    .getDietPreference({userId:'tes101'})
    .then((res:any)=>{
        this.personalise = JSON.parse(JSON.stringify(res)).personalise.sort(
          function (a, b) {
            return a.slots - b.slots;
          }
        );
        console.log("this.personalise", this.personalise);
        
        // this.tempData = JSON.parse(JSON.stringify(this.personalise));
        // this.tempData.sort(function (a, b) {
        //   return a.slots - b.slots;
        // });
        // this.personaliseKeys = Object.keys(this.personalise);
        // this.progressData.in = 1;
        // this.progressData["length"] = this.personaliseKeys.length;
        // this.setCurrentPersonalise(this.currentPersonaliseIndex);
        // for (let index = 0; index < this.personalise.length; index++) {
        //   this.personaliseName.push(this.personalise[index].name);
        // }
    },err=>{
  console.log("error",err);
  
    });
  }
  itemsPerPage = 15;
  currentPage = 1;

  foodItems = [
    { name: 'Brown Rice', cal: 109, selected: false },
    { name: 'Palak Dal', cal: 83, selected: false },
    { name: 'Beetroot Raita', cal: 66, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Brown Rice', cal: 109, selected: false },
    { name: 'Palak Dal', cal: 83, selected: false },
    { name: 'Beetroot Raita', cal: 66, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Brown Rice', cal: 109, selected: false },
    { name: 'Palak Dal', cal: 83, selected: false },
    { name: 'Beetroot Raita', cal: 66, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
    { name: 'Rajma Curry', cal: 116, selected: false },
    { name: 'Quinoa', cal: 222, selected: false },
    { name: 'Cucumber Tomato Salad', cal: 34, selected: false }

  ];

  get paginatedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.foodItems.slice(start, start + this.itemsPerPage);
  }

  toggleSelection(item: any) {
    item.selected = !item.selected;
  }

  get selectedItems() {
    return this.foodItems.filter(item => item.selected);
  }
  get totalPages() {
  return Math.ceil(this.foodItems.length / this.itemsPerPage);
}

goToPreviousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

goToNextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }
}
}
