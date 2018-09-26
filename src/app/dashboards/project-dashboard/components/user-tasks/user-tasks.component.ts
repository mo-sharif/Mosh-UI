import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'portal-dashboard-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.scss']
})
export class UserTasksComponent {
  users: MatTableDataSource<User> = new MatTableDataSource();
  selectedUser: User;

  constructor(private http: HttpClient) {
    this.http.get<User[]>('assets/data/dashboards/users.json')
      .subscribe(users => this.users.data = users);
  }
  onClickedUser(user: User): void {
    this.selectedUser = user;
  }
}

export interface User {

  title: string;
  name: string;
  surname: string;
  closed_tasks: string;
  new_tasks: string;
  photo: string;

}
