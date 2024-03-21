  import { Component } from '@angular/core';
  import { TaskGridComponent } from '../task-grid/task-grid.component';
  import { Task } from '../models/task';
  import { Status } from '../models/Status';
  import { CommonModule } from '@angular/common';
import { TaskCardComponent } from "../task-card/task-card.component"; // Adaugă această linie
import { TaskListComponent } from '../task-list/task-list.component';
import {MatIconModule} from '@angular/material/icon';
import { FilterComponent } from '../filter-component/filter-component.component';

  @Component({
    selector: 'tasks-view',
    standalone: true,
    templateUrl: './tasks-view.component.html',
    styleUrl: './tasks-view.component.scss',
    imports: [TaskGridComponent, CommonModule, TaskCardComponent, TaskListComponent, MatIconModule, FilterComponent]
})
  export class TasksViewComponent {
      tasksParent: Task[] =[ 
      {
      id: '1',
      title: 'Sample Task',
      description: 'This is a sample description for a task.',
      status: Status.ToDo, 
      },
      {
        id: '1',
        title: 'Sample Task 2',
        description: 'This is a sample description for a task.',
        status: Status.Done, 
      },
      {
        id: '1',
        title: 'Sample Task 3',
        description: 'This is a sample description for a task.',
        status: Status.ToDo, 
      },
      {
        id: '1',
        title: 'Sample Task 4',
        description: 'This is a sample description for a task.',
        status: Status.InProgress, 
      }
    ];

    isList:boolean = false;
  }
