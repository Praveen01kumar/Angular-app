import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [
  { path: RoutePath.Empty, component: OrderFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderFeulRoutingModule { }
