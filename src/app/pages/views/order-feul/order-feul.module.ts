import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderFeulRoutingModule } from './order-feul-routing.module';
import { OrderFormComponent } from './order-form/order-form.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [OrderFormComponent],
  imports: [
    CommonModule,
    OrderFeulRoutingModule,
    CoreModule
  ]
})
export class OrderFeulModule { }
