import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tasks: { id: number, value: String }[] = [
    {
      id: 1,
      value: "Promener Robert"
    },
    {
      id: 1,
      value: "Promener Robert"
    }
  ];

}
