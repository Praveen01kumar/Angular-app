import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css']
})
export class AddressDialogComponent implements OnInit {

  constructor(
    private addresmodel: NzModalRef,
    private authService: AuthService
  ) { }

  get modalRef() {
    return this.addresmodel;
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

