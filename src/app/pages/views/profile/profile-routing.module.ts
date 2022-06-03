import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { ProfileListComponent } from './profile-list/profile-list.component';

const routes: Routes = [
  { path: RoutePath.Empty, component: ProfileListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
