import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { FilterComponent } from '../filter-component/filter-component.component';
import { CommonModule } from '@angular/common';
import { Status } from '../models/Status';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FilterComponent, CommonModule, MatIcon],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})


export class TaskListComponent implements OnInit {
  ngOnInit(): void {
    this.filtredTasks = this.tasks;
  }
deleteTask(_t5: Task) {
throw new Error('Method not implemented.');
}
editTask(_t5: Task) {
throw new Error('Method not implemented.');
}
  filtredTasks: Task[];

handleStatusSelected(status) {
  this.filtredTasks = this.tasks.filter((task) => task.status === status);
}
  @Input() tasks: Task[];
  
}
