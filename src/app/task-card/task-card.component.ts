import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task'; // Adjust the path as necessary
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule, MatIcon],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
editTask(arg0: Task) {
throw new Error('Method not implemented.');
}
deleteTask(arg0: Task) {
throw new Error('Method not implemented.');
}
  @Input() task: Task;
}