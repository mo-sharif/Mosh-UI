import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Thread } from './../models/thread';
import { EmailService } from './../email.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class EmailListComponent {
  threads$: Observable<Thread[]>;

  constructor(private route: ActivatedRoute, private email: EmailService) {
    this.threads$ = this.email.threads();

    this.route.params
      .subscribe(params => this.email.loadThreadList(params.list));
  }
}
