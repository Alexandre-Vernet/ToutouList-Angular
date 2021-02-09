import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // list of tasks
  tasks: { id: number, value: String, isCurrent: boolean }[] = [
    {
      id: 0,
      value: "Promener Robert",
      isCurrent: true
    },
    {
      id: 1,
      value: "Balader truc",
      isCurrent: true
    },
    {
      id: 2,
      value: "Rentrer bidule",
      isCurrent: true
    }
  ];

  constructor() { }

  ngOnInit() {

  }


  // Complete or restore a task
  taskState = (id: number): void => {
    this.tasks[id].isCurrent = !this.tasks[id].isCurrent;
  };

  // Add a task 
  addTask = (value: String) => {

    // Find id for this task
    let id = this.tasks.length;

    // Get task
    let task = {
      id: id,
      value: value,
      isCurrent: true
    };

    // Add task to array
    this.tasks.push(task);

    console.log(this.tasks);
    
  };

}
