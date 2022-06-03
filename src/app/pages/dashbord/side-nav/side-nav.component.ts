import { Component, OnInit } from '@angular/core';
import { pagePaths } from 'src/app/core/config';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  externalLinks = pagePaths;
  constructor() { }

  ngOnInit(): void {
  }

}
