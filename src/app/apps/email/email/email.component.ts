import { Thread } from './../models/thread';
import { Message } from './../models/message';
import { ComposeDialogComponent } from './../compose-dialog/compose-dialog.component';
import { Subscription } from 'rxjs/Subscription';
import { EmailService } from './../email.service';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { MatDrawer, MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit, OnDestroy {
  @ViewChild('messagesDrawer') messagesDrawer: MatDrawer;

  isMobile: boolean;
  messagesDrawerOpen: boolean;
  messagesDrawerMode: string;

  menuItems: { name: string, icon: string, list: string, count: number }[] = [{
    name: 'Inbox',
    icon: 'inbox',
    list: 'inbox',
    count: 24
  }, {
    name: 'Starred',
    icon: 'stars',
    list: 'starred',
    count: 2
  }, {
    name: 'Important',
    icon: 'flag',
    list: 'important',
    count: 1
  }, {
    name: 'Sent',
    icon: 'send',
    list: 'sent',
    count: 0
  }, {
    name: 'Drafts',
    icon: 'drafts',
    list: 'drafts',
    count: 0
  }, {
    name: 'Contacts',
    icon: 'contact_mail',
    list: 'contacts',
    count: 0
  }];

  mediaSubscription: Subscription;
  emailThreadSubscription: Subscription;

  constructor(
    private media: ObservableMedia,
    private email: EmailService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Get initial state of the sidenav.
    this.calculateMessageDrawerStatus();

    // Subscribe to changes in screen size to change sidenav behavior.
    this.mediaSubscription = this.media
      .subscribe((change: MediaChange) => this.calculateMessageDrawerStatus());

    // When email thread is changed on mobile close the messages drawer.
    this.emailThreadSubscription = this.email.currentThread()
      .subscribe(currentThread => {
        if (this.isMobile && currentThread) {
          this.messagesDrawer.close();
        }
      });
  }

  compose(): void {
    const dialogRef = this.dialog.open(ComposeDialogComponent, {
      width: '500px',
      data: {
        type: 'new',
        thread: null,
        message: null
      }
    });

    dialogRef.afterClosed()
      .subscribe((newThread: Thread) => {
        if (newThread) {
          this.email.addThread(newThread);
          this.snackBar.open('Email Sent', '', {
            duration: 3000,
            horizontalPosition: 'right'
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
    this.emailThreadSubscription.unsubscribe();
  }

  calculateMessageDrawerStatus(): void {
    this.isMobile = this.media.isActive('lt-md');
    // Close sidenav on mobile.
    this.messagesDrawerOpen = !this.isMobile;
    // Make sidenav open over content on mobile.
    this.messagesDrawerMode = this.isMobile ? 'over' : 'side';
  }

  menuItemClick(): void {
    if (this.isMobile) {
      this.messagesDrawer.open();
    }
  }
}
