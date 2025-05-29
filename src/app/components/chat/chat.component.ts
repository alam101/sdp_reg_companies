import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [ IonicModule, CommonModule, FormsModule], 
})
export class ChatComponent implements OnInit {
  isShow=true;
  newMessage: string = '';
  messages:any;
  complteObject:any;
  startMessages: { sender: string; text: string; options?: {label: string}[] }[] = [];
  myMessage=[];
  botMessage=[];
  constructor(private http: HttpClient, private wsService: WebSocketService,private socketService: SocketService) {}
  
 
 ngOnInit() {
  const message='adarsh';
  this.socketService.emit('initialize', {});
   this.socketService.on('bot_reply', (msg) => {
    console.log("received:-", msg); 
     if(msg.message?.options?.length>0){
      this.complteObject = msg;
        this.messages = msg.message;
      }
      else{
         this.complteObject = msg;
        if(msg.message){
          if(msg.message?.options){
            this.messages =msg.message;
          }
          if(typeof msg.message)
          if(msg.message?.hint){
            this.botMessage.push(msg.message.hint);
          }
          else{
            this.botMessage.push(msg.message.label);
          }
         
        }
      }
    
  
  });
  
 
  // this.getWelcomeMessage();
}

    goBack(){
      console.log("this.myMessage[0]", this.myMessage[0]);
      
       this.socketService.emit("send_message",{message:this.myMessage[0]});
    }
  sendMessage() {
   
    console.log({...this.complteObject,input:this.newMessage});  
   
    this.socketService.emit("send_message",{...this.complteObject,input:this.newMessage});
      this.newMessage="";
  }

  optionClickListener(option){
    this.myMessage.push(option.label);
    this.socketService.emit("send_message",{message:option.label})
    // this.socketService.on('bot_message', (msg) => {
    //   console.log('bot_message:', msg);
    // });
  }

  menuOppener(){
    this.messages.push({
      sender: 'bot',
      text: `Choose on of Below`,
      options: [{label: '1. Go Back'}, {label: '2. Start Again'}, {label: '3. No Queries'}]
    });
  }




}
