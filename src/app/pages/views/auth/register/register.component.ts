import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/core/service/auth.service';
import { ExisitingCustomer, IRegisterUser } from 'src/app/core/shared/typings/app.typings';
import { ValidateEmail } from 'src/app/core/validator/email.validator';
import { MatchFieldValidator } from 'src/app/core/validator/field-matcher.validator';
import { NoWhitespaceValidator } from 'src/app/core/validator/no-whitespace.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  customerForm:FormGroup;
  existCustomer:FormGroup;

  @Input() modalRef?: NzModalRef;
  @Output() destroyModal = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.initializeCustomerchange();
    this.initializeExisting();
    this.initializeRegisterForm();
  }

  get e() {
    return this.customerForm.controls;
  }

  get c() {
    return this.customerForm.controls;
  }

  get f() {
    return this.signupForm.controls;
  }
/**
   * Initialize customer change
   */
  initializeCustomerchange(){
    this.customerForm = this.fb.group({
      fuelType:[true]
    })
  }

  /**
   * Initialize Existing  customer
   */
  initializeExisting(){
    this.existCustomer = this.fb.group({
      email_number:['', Validators.required]
    })
  }


  /**
   * Initialize Register form
   */
  initializeRegisterForm(){
    this.signupForm = this.fb.group({
      name:['', Validators.required],
      email:['', [ValidateEmail]],
      street:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      zip:['', Validators.required],
      phone_number:['', [Validators.minLength(10), Validators.maxLength(12),Validators.required]],
      location:['', Validators.required],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
      { validator: MatchFieldValidator.mustMatch('password', 'confirmPassword') });
  }

  destroyDialog() {
    this.destroyModal.emit();
  }
  
  onSignup(): void {
    const controls = this.signupForm.controls
    for (const i in controls) {
      controls[i].markAsDirty();
      controls[i].updateValueAndValidity();
    }
    if(this.signupForm.valid){
      const payload:IRegisterUser = this.signupForm.value;
      this.onCreateUser(payload);
    }
  }

  onExistSignup(){
    const controls = this.existCustomer.controls
    for (const i in controls) {
      controls[i].markAsDirty();
      controls[i].updateValueAndValidity();
    }
    if(this.existCustomer.valid){
      const payload:ExisitingCustomer = this.existCustomer.value;
      this.onExistingUser(payload);
    }
  }

   // Crete API call to Existing customer
   onExistingUser(userData: ExisitingCustomer){
    console.log(userData)
    this.destroyDialog();
    this.authService.openVerificationDialog();
  
   }

  // Crete API call to new customer
  onCreateUser(userData: IRegisterUser){
    console.log(userData)
  }



}
