import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts: MatTableDataSource<Contact> = new MatTableDataSource();
  selectedContact: Contact;

  constructor(private http: HttpClient) {
    this.http.get<Contact[]>('assets/data/apps/contacts/contacts.json')
      .subscribe(contacts => this.contacts.data = contacts);
  }
  onClickedContact(contact: Contact): void {
    this.selectedContact = contact;
  }
  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.contacts.filter = filterValue;
  }
}

export interface Contact {

  title: string;
  name: string;
  surname: string;
  photo: string;
  phone: string;
  gender: string;
  region: string;
  age: string;
  birthday: {
    dmy: string;
  };
  credit_card: {
    expiration: string;
    number: string;
    pin: string;
    security: string;
  };

}
