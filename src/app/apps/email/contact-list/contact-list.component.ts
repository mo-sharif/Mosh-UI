import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contacts$: Observable<Contact[]>;

  constructor(private http: HttpClient) {
    this.contacts$ = this.http.get<Contact[]>('assets/data/apps/email/contacts.json');
  }
}

export interface Contact {
  name: string;
  surname: string;
  photo: string;
}

