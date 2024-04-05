import { Injectable } from '@angular/core';
import { Subject,Subscription,BehaviorSubject } from 'rxjs';

@Injectable()
export class BroadcastService {
private subject = new Subject<any>();
  constructor() { }
  
  boradcast(message) {
    this.subject.next(message);
  }

  getMessage() {
    return this.subject.asObservable();
  }
}

export interface Message {
  type: string;
  payload: any;
}