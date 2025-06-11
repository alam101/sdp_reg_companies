import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.page.html',
  styleUrls: ['./chat-bot.page.scss'],
})
export class ChatBotPage implements OnInit {
  isShow=true;
  newMessage: string = '';
  messages:any;
  complteObject:any;
  startMessages: { sender: string; text: string; options?: {label: string}[] }[] = [];
  myMessage=[];
  botMessage=[];
  clientId="Fitrofy";
  isActiveInput=false;
  constructor(private http: HttpClient, private wsService: WebSocketService,private socketService: SocketService) {
    this.clientId = localStorage.getItem("clientId");
  }
  
 
 ngOnInit() {
console.log("gggg", localStorage.getItem("userId"));

  const message='adarsh';
  this.socketService.emit('initialize', {userId:localStorage.getItem("userId")});
   this.socketService.on('bot_reply', (msg) => {
    this.isActiveInput=false;
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
           if(msg?.message?.label.split(' ')?.includes('Invalid')){
            this.botMessage.push(msg.message.label);
          }
          if(msg?.message?.hint){
            this.isActiveInput=true;
            this.botMessage.push(msg.message.hint);
          }
          else{
             this.isActiveInput=false;
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
    this.myMessage.push(this.newMessage);
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
