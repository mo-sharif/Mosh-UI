import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Conversation } from '../models/conversation';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  conversations$: Observable<Conversation[]>;
  conversationStream: BehaviorSubject<any>;
  selectedConversation$: Observable<Conversation>;
  newMessage: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.conversations$ = this.http.get<Conversation[]>(`assets/data/apps/chat/recent.json`);
    this.conversationStream = new BehaviorSubject(null);
    this.selectedConversation$ = this.conversationStream.asObservable();
  }

  selectConversation(conversation: Conversation): void {
    this.conversationStream.next(conversation);
  }

  insertMessage(conversation: Conversation): void {
    conversation.messages.push({
      from: {
        name: conversation.messages[1].from.name,
        image: conversation.messages[1].from.image,
        email: conversation.messages[1].from.email
      },
      date: new Date(),
      content: this.newMessage
    });
    this.newMessage = null;
  }

}
