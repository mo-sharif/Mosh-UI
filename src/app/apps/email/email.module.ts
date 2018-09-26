import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { QuillEditorModule } from 'ngx-quill-editor';

import { SharedModule } from './../../shared/shared.module';

import { EmailComponent } from './email/email.component';
import { EmailListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { NoMessagesComponent } from './no-messages/no-messages.component';
import { ContactListComponent } from './contact-list/contact-list.component';

import { EmailService } from './email.service';
import { ComposeDialogComponent } from './compose-dialog/compose-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    QuillEditorModule,
    RouterModule,
  ],
  providers: [
    EmailService
  ],
  declarations: [
    EmailComponent,
    EmailListComponent,
    MessagesComponent,
    NoMessagesComponent,
    ContactListComponent,
    ComposeDialogComponent,
    DeleteDialogComponent
  ],
  entryComponents: [
    ComposeDialogComponent,
    DeleteDialogComponent
  ]
})
export class EmailModule { }
