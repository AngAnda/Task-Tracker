  import { Component } from '@angular/core';
  import { TaskGridComponent } from '../task-grid/task-grid.component';
  import { Task } from '../models/task';
  import { Status } from '../models/Status';
  import { CommonModule } from '@angular/common'; // Adaugă această linie


  @Component({
    selector: 'tasks-view',
    standalone: true,
    imports: [TaskGridComponent, CommonModule],
    templateUrl: './tasks-view.component.html',
    styleUrl: './tasks-view.component.scss'
  })
  export class TasksViewComponent {
    taskList: Task[] =[ 
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
        status: Status.ToDo, 
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
        status: Status.ToDo, 
      }

    ];
  }
