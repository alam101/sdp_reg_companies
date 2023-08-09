import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-selected',
  templateUrl: './meal-selected.component.html',
  styleUrls: ['./meal-selected.component.scss'],
})
export class MealSelectedComponent implements OnInit {
  @Input()selectedItem;
  @Input()slot;
  @Input()time;
  @Input()likeFood;
  constructor() { }

  ngOnInit() {}

}
