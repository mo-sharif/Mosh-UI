import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {
  todoList: string[];
  newTodo: string;
  constructor() {
    this.todoList = [
      'Data Backup',
      'Linux Update',
      'Cloud Upload',
      'Server Restart',
      'Standup Meeting',
      'Code Review',
      'Read Email',
      'Make Coffee'
    ];
  }

  ngOnInit(): void {
  }

  addTodo(): void {
    if (this.newTodo) {
      this.todoList.unshift(this.newTodo);
      this.newTodo = null;
    }
  }

}
