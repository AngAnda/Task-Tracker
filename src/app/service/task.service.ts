import { Injectable } from '@angular/core';
import { Status } from '../models/Status';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks()
  {
    return this.tasks;
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
    console.log(this.tasks)
    return newTask;
  }

  editTask(task: Task): void {
    let i = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[i] = task;
  }

  deleteTask(id:string) : void{
    let i = this.tasks.findIndex((t) => t.id == id);
    this.tasks = this.tasks.splice(i, 1)
  }

  tasks: Task[] = [
    {
      id: '1',
      title: 'Learn about HTML and SCSS',
      description: 'Learn the basics concepts about HTML and CSS+SCSS',
      status: Status.InProgress,
      assignedTo: 'Andrei',
    },
    {
      id: '2',
      title: 'Create your first Angular app',
      description:
        'Create a new Angular application for managing tasks. You will configure the packages needed for developing the project and then you will define the main components of the application.',
      status: Status.ToDo,
      assignedTo: 'Ioana',
    }
  ];

}
