import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-list',
  templateUrl: './previous-list.component.html',
  styleUrls: ['./previous-list.component.css']
})
export class PreviousListComponent implements OnInit {
  current = 1;
  photo = './assets/images/slider2.png'
  constructor() { }

  ngOnInit(): void {
  }

}
