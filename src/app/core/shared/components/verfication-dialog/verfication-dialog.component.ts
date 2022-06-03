import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-verfication-dialog',
  templateUrl: './verfication-dialog.component.html',
  styleUrls: ['./verfication-dialog.component.css']
})
export class VerficationDialogComponent implements OnInit {

  constructor(
    private VerficationModal: NzModalRef,
    private authService: AuthService
  ) { }

  get modalRef() {
    return this.VerficationModal;
  }

  ngOnInit(): void {
  }

  destroyModal() {
    this.VerficationModal.destroy();
  }

  openSignUpDialog() {
    this.destroyModal();
    this.authService.openSignUpDialog();
  }

}
