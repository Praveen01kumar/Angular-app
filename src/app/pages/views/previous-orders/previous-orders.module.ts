import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviousOrdersRoutingModule } from './previous-orders-routing.module';
import { PreviousListComponent } from './previous-list/previous-list.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [PreviousListComponent],
  imports: [
    CommonModule,
    PreviousOrdersRoutingModule,
    CoreModule
  ]
})
export class PreviousOrdersModule { }
