import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/core/service/auth.service';
import { MatchFieldValidator } from 'src/app/core/validator/field-matcher.validator';
import { VerficationUser } from 'src/app/core/shared/typings/app.typings';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  @Input() modalRef?: NzModalRef;
  @Output() destroyModal = new EventEmitter<any>();
  verificationForm!:FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeVerficationuser();
  }
  get f() {
    return this.verificationForm.controls;
  }
  
  /**
   * Initialize Register form
   */
  initializeVerficationuser(){
    this.verificationForm = this.fb.group({
      verfication_code:['', Validators.required],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
      { validator: MatchFieldValidator.mustMatch('password', 'confirmPassword') });
  }

  onVerification(){
    const controls = this.verificationForm.controls
    for (const i in controls) {
      controls[i].markAsDirty();
      controls[i].updateValueAndValidity();
    }
    if(this.verificationForm.valid){
      const payload:VerficationUser = this.verificationForm.value;
      this.onVerificationUser(payload);
    } 
  }

   // Crete API call to new password
  onVerificationUser(userData:VerficationUser){
    console.log(userData)
  }

  destroyDialog() {
    this.destroyModal.emit();
  }

}
