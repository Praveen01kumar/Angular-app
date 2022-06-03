import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout-header',
  template:`
  <div class="text-center heading-popup">
    <ng-content *ngIf="!title" select="[sbtemplateTitle]"></ng-content>
    <h2 class="font-weight-bold m-0" *ngIf="title" [innerHTML]="title"></h2>
    <div *ngIf="!subtitle" class="mb-4 mt-3 text-muted">
      <ng-content select="[sbtemplateSubTitle]"></ng-content>
    </div>
    <div class="mb-4 mt-3 text-muted" *ngIf="subtitle" [innerHTML]="subtitle"></div>
  </div>
`,
  styleUrls: ['./login-layout-header.component.css']
})
export class LoginLayoutHeaderComponent implements OnInit {
  @Input() class: string;
  // a simple title text
  @Input() title: string;
  @Input() subtitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
