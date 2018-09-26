import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: any[];
  selectedOptions: string[];
  newTodo: string;
  constructor() {
    this.todoList = [{
        name: 'Data Backup',
        completed: false
      }, {
        name: 'Linux Update',
        completed: false
      }, {
        name: 'Cloud Upload',
        completed: false
      }, {
        name: 'Standup Meeting',
        completed: false
      }, {
        name: 'Code Review',
        completed: false
      }, {
        name: 'Live Updates',
        completed: false
      }, {
        name: 'Demo install',
        completed: false
      }
    ];
    this.selectedOptions = [];
  }

  ngOnInit(): void {}

  addTodo(): void {
    if (this.newTodo) {
      this.todoList.unshift({
        name: this.newTodo,
        completed: false
      });
      this.newTodo = null;
    }
  }

  deleteSelectedTodos(): void {
    this.todoList = this.todoList.filter(item => this.selectedOptions.indexOf(item.name) === -1);
    this.selectedOptions = [];
  }

  completeSelectedTodos(): void {
    this.todoList.filter(item => this.selectedOptions.indexOf(item.name) !== -1).forEach(item => {
      item.completed = true;
    });
    this.sortTodos();
  }

  uncompleteSelectedTodos(): void {
    this.todoList.filter(item => this.selectedOptions.indexOf(item.name) !== -1).forEach(item => {
      item.completed = false;
    });
    this.sortTodos();
  }

  sortTodos(): void {
    this.todoList.sort((a, b) => Number(a.completed) - Number(b.completed));
  }

  onSelectedOptionsChange(values: string[]): void {
    this.selectedOptions = values;
  }
}
