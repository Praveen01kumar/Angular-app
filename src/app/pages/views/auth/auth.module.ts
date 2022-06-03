import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from 'src/app/core/core.module';
import { VerificationComponent } from './verification/verification.component';

const COMPONENTS = [
  // RegisterComponent,
  // LoginComponent,
  // VerificationComponent
]

@NgModule({
  declarations: [
...COMPONENTS
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule
  ]
})
export class AuthModule { }
