import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Thread } from './../models/thread';
import { Message } from './../models/message';

import { EmailService } from './../email.service';

import { ComposeDialogComponent } from './../compose-dialog/compose-dialog.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  currentThread$: Observable<Thread>;

  constructor(
    private route: ActivatedRoute,
    private email: EmailService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.currentThread$ = this.email.currentThread();

    this.route.params.subscribe(params => this.email.loadThread(params.id));
  }

  reply(type: string, thread: Thread, message: Message): void {
    const dialogRef = this.dialog.open(ComposeDialogComponent, {
      width: '500px',
      data: {
        type: type,
        thread: thread,
        message: message
      }
    });

    dialogRef.afterClosed()
      .subscribe((updatedThread: Thread) => {
        if (updatedThread) {
          this.snackBar.open('Email Sent', '', {
            duration: 3000,
            horizontalPosition: 'right'
          });
        }
      });
  }

  delete(thread: Thread, message: Message): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed()
      .subscribe((deleteMessage: boolean) => {
        if (deleteMessage) {
          const index = thread.messages.findIndex((msg) => msg === message);
          thread.messages.splice(index, 1);
          this.snackBar.open('Message deleted', '', {
            duration: 3000,
            horizontalPosition: 'right'
          });
        }
      });
  }
}
