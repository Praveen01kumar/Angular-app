import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-register-user-dialog',
  templateUrl: './register-user-dialog.component.html',
  styleUrls: ['./register-user-dialog.component.css']
})
export class RegisterUserDialogComponent implements OnInit {

  constructor(
    private registerModalRef: NzModalRef,
    private authService: AuthService
  ) { }

  get modalRef() {
    return this.registerModalRef;
  }

  ngOnInit(): void {
  }

  destroyModal() {
    this.modalRef.destroy();
  }

  openLoginDialog() {
    this.destroyModal();
    this.authService.openLoginDialog();

  }

}
