import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { Status } from '../models/Status';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-component',
  standalone: true,
  imports: [MatButtonModule, CommonModule], // Include MatButtonModule here
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})

export class FilterComponent implements OnInit {
  selectStatus(status: any) {
    console.log(status)
  }
    
  statuses = Object.values(Status); // Get the enum values

  ngOnInit(): void {
    // Your initialization code here
  }
}
