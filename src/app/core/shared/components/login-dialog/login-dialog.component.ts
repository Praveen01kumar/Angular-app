import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    private loginModal: NzModalRef,
    private authService: AuthService
  ) { }

  get modalRef() {
    return this.loginModal;
  }

  ngOnInit(): void {
  }


  destroyModal() {
    this.loginModal.destroy();
  }

  openSignUpDialog() {
    this.destroyModal();
    this.authService.openSignUpDialog();
  }

}
