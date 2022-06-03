import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  array = [
    {name:'NEIL PATEL', designation:'designer', src:'../../../../assets/images/testimonial/t2.png', para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nibh sed metus fringilla euismod. Aenean finibus nunc in est vestibulum posuere. Nam ullamcorper augue eget volutpat interdum.'},
    {name:'JONSEN', designation:'Angular', src:'../../../../assets/images/testimonial/t2.png', para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nibh sed metus fringilla euismod. Aenean finibus nunc in est vestibulum posuere. Nam ullamcorper augue eget volutpat interdum.'},
    // {name:'NEIL PATEL', designation:'designer', para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nibh sed metus fringilla euismod. Aenean finibus nunc in est vestibulum posuere. Nam ullamcorper augue eget volutpat interdum.'}
  ];
  effect = 'scrollx';

  constructor() { }

  ngOnInit(): void {
  }

}
