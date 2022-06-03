import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    {path:'./assets/images/sslider1.png'},
    {path:'./assets/images/sslider1.png'}
  ]
  array = [
    {name:'NEIL PATEL', designation:'designer', para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nibh sed metus fringilla euismod. Aenean finibus nunc in est vestibulum posuere. Nam ullamcorper augue eget volutpat interdum.'}
  ];
  effect = 'scrollx';

  constructor() { }

  ngOnInit(): void {
  }

}
