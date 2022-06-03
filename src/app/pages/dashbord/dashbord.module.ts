import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SideNavComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    CoreModule
  ]
})
export class DashbordModule { }
