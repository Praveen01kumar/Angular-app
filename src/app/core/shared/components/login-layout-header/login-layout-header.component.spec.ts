import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayoutHeaderComponent } from './login-layout-header.component';

describe('LoginLayoutHeaderComponent', () => {
  let component: LoginLayoutHeaderComponent;
  let fixture: ComponentFixture<LoginLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLayoutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
