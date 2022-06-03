import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { ProfileListComponent } from './profile-list/profile-list.component';

const COMPONENTS =[
  ProfileListComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CoreModule
  ]
})
export class ProfileModule { }
