import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { AuthDialogOptions } from '../config/modal-dialog.config';
import { LoginDialogComponent } from '../shared/components/login-dialog/login-dialog.component';
import { RegisterUserDialogComponent } from '../shared/components/register-user-dialog/register-user-dialog.component';
import { VerficationDialogComponent } from '../shared/components/verfication-dialog/verfication-dialog.component';
import { AddressDialogComponent } from '../shared/components/address-dialog/address-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    public router: Router,
    private modalService: NzModalService
  ) { }


  openLoginDialog() {
    const modal = this.modalService.create({
        ...AuthDialogOptions,
        nzContent: LoginDialogComponent,
    });
}

openSignUpDialog() {
  const modal = this.modalService.create({
      ...AuthDialogOptions,
      nzContent: RegisterUserDialogComponent,
  });
}

openVerificationDialog() {
  const modal = this.modalService.create({
      ...AuthDialogOptions,
      nzContent: VerficationDialogComponent,
  });
}

openAddAddresDialog() {
  const modal = this.modalService.create({
      ...AuthDialogOptions,
      nzContent: AddressDialogComponent,
  });
}

}
