import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SharedModule } from '../shared.module';
import { CustomZorroModule } from '../custom-zorro/custom-zorro.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoginLayoutHeaderComponent } from './login-layout-header/login-layout-header.component';
import { RegisterUserDialogComponent } from './register-user-dialog/register-user-dialog.component';
import { LoginComponent } from 'src/app/pages/views/auth/login/login.component';
import { RegisterComponent } from 'src/app/pages/views/auth/register/register.component';
import { VerficationDialogComponent } from './verfication-dialog/verfication-dialog.component';
import { VerificationComponent } from 'src/app/pages/views/auth/verification/verification.component';
import { AddressDialogComponent } from './address-dialog/address-dialog.component';
import { AddAddressComponent } from 'src/app/pages/views/profile/add-address/add-address.component';

const MODULES =[
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule,
  CustomZorroModule,
  DirectivesModule,
  PipesModule,
]
const COMONENTS = [
  TestimonialComponent,
  LoginComponent,
  RegisterComponent,
  LoginDialogComponent,
  LoginLayoutHeaderComponent,
  RegisterUserDialogComponent,
  VerficationDialogComponent,
  VerificationComponent,
  AddressDialogComponent,
  AddAddressComponent
]

@NgModule({
  declarations: [
    ...COMONENTS,
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports:[
    ...MODULES,
    ...COMONENTS
  ]
})
export class SharedComponentModule { }
