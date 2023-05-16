import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(todo:any) {
    this.todos.push(todo);
  }

  deleteTodo(index:any) {
    this.todos.splice(index, 1);
  }
}

