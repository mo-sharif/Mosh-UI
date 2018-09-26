import { MatTableDataSource } from '@angular/material';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'example-contacts-widget',
  templateUrl: './contacts-widget.component.html',
  styleUrls: ['./contacts-widget.component.scss']
})
export class ContactsWidgetComponent {
  contacts: MatTableDataSource<Contact> = new MatTableDataSource();

  constructor(private http: HttpClient) {
    this.http.get<Contact[]>('assets/data/dashboards/contacts.json')
      .subscribe(contacts => this.contacts.data = contacts);
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.contacts.filter = filterValue;
  }
}

export interface Contact {
  name: string;
  surname: string;
  photo: string;
}

