import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task'; // Adjust the path as necessary
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task!: Task;
}