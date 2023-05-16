import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  todos: string[] = [];
  newTodo: string;
  constructor(private storage: Storage) {}
  ionViewDidEnter() {
    this.storage.get('todos').then(todos => {
      if (todos) {
        this.todos = todos;
      }
    });
  }

  addTodo() {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
      this.saveTodos();
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  saveTodos() {
    this.storage.set('todos', this.todos);
  }

}

