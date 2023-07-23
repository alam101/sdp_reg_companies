import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss'],
})
export class TermComponent implements OnInit {
@Output() isTermAccepted = new EventEmitter(true);
@Input() isTerm:boolean=false;
isSelected:boolean=false;
  constructor() { }

  ngOnInit() {
    
  }

  checkboxClick(e){
    this.isTermAccepted.emit(e.detail.checked);
  }

  openTerm(){
    window.open("https://smartdietplanner.com/terms-conditions/",'_blank');
  }
 // <a (click)="">smartdietplanner.com/terms-conditions/</a>
  

}
