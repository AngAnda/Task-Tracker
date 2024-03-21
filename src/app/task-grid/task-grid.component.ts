import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../models/task';
import { TaskCardComponent } from "../task-card/task-card.component";


@Component({
    selector: 'task-grid',
    standalone: true,
    templateUrl: './task-grid.component.html',
    styleUrl: './task-grid.component.scss',
    imports: [MatCardModule, TaskCardComponent]
})
export class TaskGridComponent {
  @Input() task!: Task;
}
