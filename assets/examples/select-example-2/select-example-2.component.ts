import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'select-example-2',
  templateUrl: './select-example-2.component.html',
  styleUrls: ['./select-example-2.component.scss']
})
export class SelectExample2Component {
  contactsSubscription: Subscription;
  contacts: Contact[];
  contactIndex: number;

  constructor(private http: HttpClient) {
    this.contactsSubscription = this.http.get<Contact[]>('assets/data/examples/contacts.json')
      .subscribe(contacts => this.contacts = contacts);
  }
}

export interface Contact {
  name: string;
  surname: string;
  photo: string;
}
