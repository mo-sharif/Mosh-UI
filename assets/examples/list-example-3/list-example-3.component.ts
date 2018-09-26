import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'list-example-3',
  templateUrl: './list-example-3.component.html',
  styleUrls: ['./list-example-3.component.scss']
})
export class ListExample3Component {
  contacts: MatTableDataSource<Contact> = new MatTableDataSource();

  constructor(private http: HttpClient) {
    this.http.get<Contact[]>('assets/data/examples/contacts.json')
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
