import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
taskName: any;
taskDescription: any;

constructor(private router: Router) {}

onSubmit(){
console.log(this.taskName + this.taskDescription)  
this.router.navigate(['/']);
}

onCancel(){
  this.router.navigate(['/']);
}

}
