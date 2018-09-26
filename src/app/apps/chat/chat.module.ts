import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
