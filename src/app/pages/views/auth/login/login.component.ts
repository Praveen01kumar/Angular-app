import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/core/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateEmail } from 'src/app/core/validator/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  @Input() modalRef?: NzModalRef;

  @Output() destroyModal = new EventEmitter<any>();
  
  constructor(
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', [ValidateEmail]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  destroyDialog() {
    this.destroyModal.emit();
  }

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
  }
}
