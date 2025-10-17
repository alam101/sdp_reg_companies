import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/newBoarding/app.service';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  @ViewChild('content') content!: ElementRef;
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
    { id: 11, name:"Sleep & Stress",label: 'Share some tips to improve sleep and reduce stress.' }
   
  ];

  avatarUrl = 'assets/avatar.jpg';
  private readonly STORAGE_KEY = 'aiChatMessages';

  constructor(private appService:AppService,private sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
    console.log("items", this.items);
    
    const cached = localStorage.getItem(this.STORAGE_KEY);
    if (cached) {
      this.messages = JSON.parse(cached);
    } else {
      this.messages.push({ id: 1, from: 'bot', text: 'How can I help you today?' });
    }
    setTimeout(() => this.scrollToBottom(), 100);
  }

  ngOnDestroy(): void {
    this.saveMessages();
  }
private formatResponse(text: string): SafeHtml {
  marked.setOptions({
    breaks: true,
    gfm: true,
    //headerIds: false,
    //mangle: false,
  });

  const markdown = text.replace(/\*/g, '**');
  const html: string = marked.parse(markdown, { async: false }) as string;

  const youtubeRegex =
    /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})(?:[?&][^\s<]*)?/g;

  const finalHtml = html.replace(youtubeRegex, (match, videoId) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return `
      <div class="video-container">
        <iframe
          width="100%"
          style="height: 150px;border-radius: 11px;"
          src="${embedUrl}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    `;
  });

  return this.sanitizer.bypassSecurityTrustHtml(finalHtml);
}

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
    this.saveMessages();
    this.scrollToBottom();

    console.log("this.itemsthis.items:-", this.items);
    
    // prepare payload
    const payload = {data:{"id":this.items?.profile?.profile?.email},
      "dateTime": new Date().toISOString(),
      "query": text
  };
  this.isApiResponse=true;
    this.appService.sendChat(payload)
      .subscribe( (res: any) => {
         
          console.log("sucess res:",res);          
          const botReply = res?.response || res?.response || 'Sorry, I didn’t get that.';
          const formatted = this.formatResponse(botReply);
          const botMsg: ChatMessage = {
            id: Date.now() + 1,
            from: 'bot',
            text: '', // keep raw text
            html: formatted,    // keep formatted version
            time: new Date().toLocaleTimeString()
          };
          this.messages.push(botMsg);
          this.saveMessages();
          this.scrollToBottom();
           this.isApiResponse=false;
      },
        (err) => {
          console.log("Error res:",err);
          const errMsg: ChatMessage = {
            id: Date.now() + 2,
            from: 'bot',
            text: 'Sorry, there was an error connecting to the AI service.',
            time: new Date().toLocaleTimeString()
          };
          this.messages.push(errMsg);
          this.saveMessages();
          this.scrollToBottom();
          console.error('Chat API Error:', err);
           this.isApiResponse=false;
        
      });
  }

  selectQuick(option: { id: number; label: string}) {
    this.input.setValue(option.label);
    this.sendMessage(); // auto-send
  }

  private scrollToBottom() {
    try {
      setTimeout(() => {
        const el = this.content?.nativeElement as HTMLElement;
        if (el) el.scrollTop = el.scrollHeight;
      }, 100);
    } catch (e) {}
  }

  private saveMessages() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.messages));
  }
}
