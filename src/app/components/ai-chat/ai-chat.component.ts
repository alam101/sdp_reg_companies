import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { IonContent, ModalController } from "@ionic/angular";
import { FormControl } from '@angular/forms';
import { AppService } from 'src/app/newBoarding/app.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AiDietRecallSummaryComponent } from "src/app/components/ai-diet-recall-summary/ai-diet-recall-summary.component";
interface ChatMessage {
  id: number;
  from: 'bot' | 'user';
  text: string;
  html?: SafeHtml;
  time?: string;
}

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.scss']
})
export class AiChatComponent implements OnInit, OnDestroy {
 @ViewChild(IonContent, { static: false }) content!: IonContent;
  @Input() items: any;

  messages: ChatMessage[] = [];
  input = new FormControl('');

  quickOptions = [
    { id: 1, name:"Breakfast Suggestions",label: 'Please suggest the best breakfast options for me.' },
    { id: 2, name:"Dinner Ideas",label: 'What should I eat for dinner today?' },
    { id: 3, name:"Foods to Avoid",label: 'What foods should I avoid for my condition?' },
    { id: 4, name:"Exercise Info",label: 'Please suggest the best exercises for me.' },
    { id: 5, name:"Hydration Tips",label: 'How much water should I drink daily?' },
    { id: 6, name:"Snack Options",label: 'Suggest some healthy snack ideas for between meals.' },
    { id: 7, name:"Eating Out / Ordering",label: 'What can I choose when eating outside or ordering in?' },
    { id: 8, name:"⁠Travel Diet Tips ",label: 'What should I eat while traveling to stay healthy?' },
    { id: 9, name:"Alcohol Guidance",label: 'Can I drink alcohol? If yes, what’s allowed for my condition?' },
    { id: 10, name:"Weight Loss Tips",label: 'How can I lose weight safely and effectively?' },
    { id: 11, name:"Sleep & Stress",label: 'Share some tips to improve sleep and reduce stress.' },
    { id: 12, name:"Start Diet Recall", label: 'Let’s do a diet recall session.' } // 👈 Added recall trigger
  ];

  recall = [
    { question: "How do you usually start your day?", placeholder: "e.g. tea, milk or none" },
    { question: "What do you usually have for breakfast?", placeholder: "e.g. poha, eggs or none" },
    { question: "What do you typically have during mid-day?", placeholder: "e.g. fruits or none" },
    { question: "What do you generally have for lunch?", placeholder: "e.g. rice, roti, sabji or none" },
    { question: "What do you usually have in the evening?", placeholder: "e.g. coffee, snacks or none" },
    { question: "What do you typically have for dinner?", placeholder: "e.g. chapati, rice or none" },
    { question: "Do you usually have anything after dinner?", placeholder: "e.g. milk, sweets or none" }
  ];
  
  responses: string[] = [];
  currentQuestion = 0;
  isRecallMode = false;
  isRecallSummary = false;
  avatarUrl = 'assets/avatar.jpg';
  private readonly STORAGE_KEY = 'aiChatMessages';
  private readonly RECALL_KEY = 'dietRecallSession';

  constructor(
    private appService:AppService,
    private sanitizer: DomSanitizer,
    private modalController:ModalController
  ) {
    
  }

  name:string=''; 

  ngOnInit(): void {
   
    this.name = this.items?.profile?.profile?.name;
    this.loadChatCache();
    this.loadRecallCache();
    setTimeout(() => this.scrollToBottom(), 100);
    console.log("this.responses", this.responses);
    
  
  }

  ngOnDestroy(): void {
    this.saveChatCache();
    this.saveRecallCache();
  }

  // 🧩 Recall Caching
  saveRecallCache() {
    const data = {
      isRecallMode: this.isRecallMode,
      isRecallSummary: this.isRecallSummary,
      currentQuestion: this.currentQuestion,
      responses: this.responses
    };
    localStorage.setItem(this.RECALL_KEY, JSON.stringify(data));
  }

  loadRecallCache() {
    const cached = localStorage.getItem(this.RECALL_KEY);
    debugger;
    if (cached) {
      const data = JSON.parse(cached);
      this.isRecallMode = data.isRecallMode;
      this.isRecallSummary = data.isRecallSummary;
      this.currentQuestion = data.currentQuestion;
      this.responses = data.responses || [];

      if (this.isRecallMode && !this.isRecallSummary) {
        this.askNextRecallQuestion();
      } else if (this.isRecallSummary) {
        this.showRecallSummary();
      }
    }
  }

  clearRecallCache() {
    localStorage.removeItem(this.RECALL_KEY);
  }

  // 🧠 Recall Mode Logic
  startRecall() {
    this.clearRecallCache();
    this.isRecallMode = true;
    this.isRecallSummary = false;
    this.currentQuestion = 0;
    this.responses = [];
    this.pushBotMessage("Let's start your diet recall session 🍽️");
    this.askNextRecallQuestion();
    this.saveRecallCache();
  }

  askNextRecallQuestion() {
    if (this.currentQuestion < this.recall.length) {
      const q = this.recall[this.currentQuestion].question;
      this.pushBotMessage(q);
      this.saveRecallCache();
    } else {
      this.isRecallSummary = true;
      this.showRecallSummary();
    }
  }
  recallItem=[];
  async showRecallSummary() {
    this.pushBotMessage("Thanks! Here's your Diet Recall Summary!");
     this.recallItem.push({recall:this.responses});
     if(this.responses?.length>0){
       const modal = await this.modalController.create({
      component: AiDietRecallSummaryComponent,
      componentProps: {
        items: {recall:this.responses }
      },
      cssClass: 'ai-chat'
    });
  
    await modal.present();
    
    const { data } = await modal.onDidDismiss();
   if (data?.apiCall) {
    let payload=``;
    console.log('API call requested from modal:', data);
    for (let index = 0; index < data?.data.length; index++) {
      payload += `${data?.data[index].label} - ${data?.data[index].value}\n`;
      
    }
    const payld = {"data":{"id":this.items?.profile?.profile?.email},
    "dateTime": new Date().toISOString(),
    "query":payload, 
    "intent": "analyze_diet"
     }
     await this.apiCall(payld); 
   }
   else{
    this.clearRecallCache();
   }
  }
  }
 
  restartRecall() {
    this.isRecallMode = false;
    this.isRecallSummary = false;
    this.responses = [];
    this.currentQuestion = 0;
    this.clearRecallCache();
    this.pushBotMessage("Okay! You can restart anytime by typing or selecting *Start Diet Recall*.");
  }

  // 💬 Normal Chat Logic
  isApiResponse=false;

  sendMessage() {
    const text = (this.input.value || '').toString().trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      from: 'user',
      text,
      time: new Date().toLocaleTimeString()
    };

    this.messages.push(userMsg);
    this.input.setValue('');
    this.saveChatCache();
    this.scrollToBottom();

    // 🔹 Handle Recall Mode
    if (this.isRecallMode && !this.isRecallSummary) {
      this.responses[this.currentQuestion] = text;
      this.currentQuestion++;
      this.saveRecallCache();
      setTimeout(() => this.askNextRecallQuestion(), 400);
      return;
    }

    // 🔹 Normal Chat Flow
    if (text.toLowerCase().includes('diet recall')) {
      this.startRecall();
      return;
    }

    const payload = {
      data: { id: this.items?.profile?.profile?.email },
      dateTime: new Date().toISOString(),
      query: text
    };

    this.isApiResponse = true;
    this.appService.sendChat(payload).subscribe({
      next: (res: any) => {
        const botReply = res?.response || 'Sorry, I didn’t get that.';
        const formatted = this.formatResponse(botReply);
        const botMsg: ChatMessage = {
          id: Date.now() + 1,
          from: 'bot',
          text: botReply,
          html: formatted,
          time: new Date().toLocaleTimeString()
        };
        this.messages.push(botMsg);
        this.saveChatCache();
        this.scrollToBottom();
        this.isApiResponse = false;
      },
      error: (err) => {
        console.error('Chat API Error:', err);
        this.pushBotMessage('Sorry, there was an error connecting to the AI service.');
        this.saveChatCache();
        this.scrollToBottom();
        this.isApiResponse = false;
      }
    });
  }

  selectQuick(option: { id: number; label: string}) {
    this.input.setValue(option.label);
    this.sendMessage();
  }

  // 🔧 Formatting and Cache
  private formatResponse(text: string): SafeHtml {
    if (!text) return '';
    let safeText = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*([^\*]+)\*/g, '<strong>$1</strong>')
      .replace(/_([^_]+)_/g, '<em>$1</em>')
      .replace(/~([^~]+)~/g, '<del>$1</del>')
      .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(safeText);
  }

  pushBotMessage(text: string) {
    this.messages.push({
      id: Date.now() + Math.random(),
      from: 'bot',
      text,
      html: this.formatResponse(text),
      time: new Date().toLocaleTimeString()
    });
    this.saveChatCache();
    this.scrollToBottom();
  }

 private scrollToBottom(duration: number = 300) {
  if (this.content) {
    setTimeout(() => {
      this.content.scrollToBottom(duration).catch(err => console.warn('Scroll failed:', err));
    }, 100);
  }
}

  private saveChatCache() {
    const safeToStore = this.messages.map(m => ({ ...m, html: undefined }));
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(safeToStore));
  }

  private loadChatCache() {
    const cached = localStorage.getItem(this.STORAGE_KEY);
    if (cached) {
      const parsed: ChatMessage[] = JSON.parse(cached);
      this.messages = parsed.map(msg => ({
        ...msg,
        html: msg.from === 'bot' ? this.formatResponse(msg.text) : undefined
      }));
    } else {
      this.pushBotMessage('How can I help you today?');
    }
  }
 
  apiCall(payload){
    //   const payload = {
    //   data: { id: this.items?.profile?.profile?.email },
    //   dateTime: new Date().toISOString(),
    //   query: text
    // };

    this.isApiResponse = true;
    this.appService.sendChat(payload).subscribe({
      next: (res: any) => {
        const botReply = res?.response || 'Sorry, I didn’t get that.';
        const formatted = this.formatResponse(botReply);
        const botMsg: ChatMessage = {
          id: Date.now() + 1,
          from: 'bot',
          text: botReply,
          html: formatted,
          time: new Date().toLocaleTimeString()
        };
        this.messages.push(botMsg);
        this.saveChatCache();
        this.scrollToBottom();
        this.isApiResponse = false;
      },
      error: (err) => {
        console.error('Chat API Error:', err);
        this.pushBotMessage('Sorry, there was an error connecting to the AI service.');
        this.saveChatCache();
        this.scrollToBottom();
        this.isApiResponse = false;
      }
    });
  }
}
