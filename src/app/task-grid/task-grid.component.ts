import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../models/task';


@Component({
  selector: 'task-grid',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss',
})
export class TaskGridComponent {
  @Input() task!: Task;
}
