import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() button={class:'button button-color outline button-full', mode:'ios', shape:'round'};
  @Output() gotoNextEmit = new EventEmitter(true);
  constructor() { }

  ngOnInit(): void {
  }


  gotoNext(){
    this.gotoNextEmit.emit({moveNext:this.button});
  }
}
