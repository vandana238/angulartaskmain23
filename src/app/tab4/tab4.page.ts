import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  title = 'Todo List with Ionic';
  tasks: { id: number; name: string }[] = [];
  newTask = '';
  editingTaskId: number | null = null;
  storedTasks: any;

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ id: this.tasks.length + 1, name: this.newTask });
      this.newTask = '';
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      sessionStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  startEditingTask(id: number) {
    this.editingTaskId = id;
  }

  isEditingTask(id: number) {
    return this.editingTaskId === id;
  }

  saveTaskChanges(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task && task.name.trim() !== '') {
      task.name = task.name.trim();
      this.editingTaskId = null;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      console.log(this.tasks, 'editede data');
    }
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
