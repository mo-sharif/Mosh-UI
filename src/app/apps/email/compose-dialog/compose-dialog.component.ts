import { Thread } from './../models/thread';
import { Message } from './../models/message';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-compose-dialog',
  templateUrl: './compose-dialog.component.html',
  styleUrls: ['./compose-dialog.component.scss']
})
export class ComposeDialogComponent {
  type: string;
  emailForm: FormGroup;
  showCC: boolean = false;

  editorOptions: any = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'list': 'ordered'}, { 'list': 'bullet' }],

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ]
    },
    placeholder: 'insert email content...'
  };

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<ComposeDialogComponent>
  ) {
    // Set dialog type reply|replyAll|forward|new.
    this.type = data.type;

    this.emailForm = this.fb.group({
      to: ['', [Validators.email, Validators.required]],
      cc: [''],
      bcc : [''],
      subject: [''],
      content: ['', Validators.required]
    });

    if (data.thread) {
      this.emailForm.patchValue({
        subject: data.thread.subject
      });
    }

    if (data.message) {
      this.emailForm.patchValue({
        to: this.data.message.from.email,
      });
    }
  }

  send(): void {

    if (null === this.data.thread) {
      const newThread: Thread = {
        id: Date.now().toString(),
        from: {
          email: 'morris@gmail.com',
          name: 'Morris Onions',
          image: 'assets/images/avatars/avatar-2.png'
        },
        subject: this.emailForm.value.subject,
        messages: [],
      };
      this.data.thread = newThread;
    }

    const newMessage: Message = {
      date: Date.now(),
      from: {
        email: 'morris@gmail.com',
        name: 'Morris Onions',
        image: 'assets/images/avatars/avatar-2.png'
      },
      content: this.emailForm.value.content
    };

    this.data.thread.messages.unshift(newMessage);

    this.dialog.close(this.data.thread);
  }

}
