import { Component, Input } from '@angular/core';
import { Task } from '../models/task';
import { FilterComponent } from '../filter-component/filter-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FilterComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() tasks: Task[];
}
