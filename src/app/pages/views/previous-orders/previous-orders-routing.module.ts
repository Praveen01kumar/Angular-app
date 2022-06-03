import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { PreviousListComponent } from './previous-list/previous-list.component';

const routes: Routes = [
  { path: RoutePath.Empty, component: PreviousListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviousOrdersRoutingModule { }
