import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  @Input() modalRef?: NzModalRef;
  @Output() destroyModal = new EventEmitter<any>();

  addAddresForm!: FormGroup;
  sub:boolean = false;

  noOfTank = [];

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.noOfTanks();
    this.initializeAddAddress();
  }

  // no of tanks function 
  noOfTanks() {
    for (var i = 1; i < 13; i++) {
      this.noOfTank.push(i.toString());
    }
    console.log("multiple arrry", this.noOfTank)
  }

  addTanks(event) {
    console.log(event);
    const y: number = +event;
    let details = this.addAddresForm.get("multipetank") as FormArray;
      details.clear();
    for (var i = 0; i < y; i++) {
      details.push(this.createItem());
  }
  }

  getCourses(form):FormArray{
    return form.get('multipetank').controls;
  }

  createItem() {
    return this.fb.group({
      tanksize: ['', Validators.required]
    })
  }

  get f() {
    return this.addAddresForm.controls;
  }

  /**
   * Initialize Add Addres form field
    */
  initializeAddAddress() {
    this.addAddresForm = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      feultype: ['', Validators.required],
      noOfTank: ['', Validators.required],
      multipetank: this.fb.array([])
    })
  }
 

  onAddAddres() {
    const controls = this.addAddresForm.controls;
    this.sub = true;
    for (const i in controls) {
      controls[i].markAsDirty();
      controls[i].updateValueAndValidity();
    }
    if (this.addAddresForm.valid) {
    //  return
    console.log(this.addAddresForm.value)
      // const payload:VerficationUser = this.verificationForm.value;
      // this.onVerificationUser(payload);
    }
  }

  //   console.log(userData)
  // }

  destroyDialog() {
    this.destroyModal.emit();
  }

}
