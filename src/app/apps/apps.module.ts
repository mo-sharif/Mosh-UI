import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { routing } from './apps-routing.module';

import { MessagesComponent } from './email/messages/messages.component';
import { NoMessagesComponent } from './email/no-messages/no-messages.component';
import { EmailListComponent } from './email/list/list.component';
import { ContactListComponent } from './email/contact-list/contact-list.component';
import { EmailComponent } from './email/email/email.component';
import { ChatComponent } from './chat/chat/chat.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MapsComponent } from './maps/maps/maps.component';
import { AppCalendarComponent } from './calendar/calendar/calendar.component';
import { NotesComponent } from './notes/notes/notes.component';

import { TodoModule } from './todo/todo.module';
import { MapsModule } from './maps/maps.module';
import { EmailModule } from './email/email.module';
import { ContactsModule } from './contacts/contacts.module';
import { ChatModule } from './chat/chat.module';
import { CalendarAppModule } from './calendar/calendar.module';
import { NotesModule } from './notes/notes.module';
import { SpotifyModule } from './spotify/spotify.module';

@NgModule({
  imports: [
    SharedModule,
    routing,
    ChatModule,
    ContactsModule,
    EmailModule,
    MapsModule,
    TodoModule,
    CalendarAppModule,
    NotesModule,
    SpotifyModule
  ]
})
export class AppsModule { }
