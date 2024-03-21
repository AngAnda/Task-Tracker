import { Component, Input } from '@angular/core';
import { Task } from '../models/task';
import { FilterComponent } from '../filter-component/filter-component.component';
import { CommonModule } from '@angular/common';
import { Status } from '../models/Status';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FilterComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})


export class TaskListComponent {
  filtredTasks: Task[];

handleStatusSelected(status) {
  this.filtredTasks = this.tasks.filter((task) => task.status === status);
}
  @Input() tasks: Task[];
  
}
