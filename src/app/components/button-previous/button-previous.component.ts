import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-previous',
  templateUrl: './button-previous.component.html',
  styleUrls: ['./button-previous.component.scss'],
})
export class ButtonPreviousComponent implements OnInit {
  @Input() button={class:'button button-outline outline button-full', mode:'ios', shape:'round'};
  @Output() gotoPrevious = new EventEmitter(true);
  constructor() { }

  ngOnInit(): void {
  }
  goto(){
    this.gotoPrevious.emit('');
  }
}
