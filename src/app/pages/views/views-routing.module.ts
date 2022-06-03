import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: RoutePath.Empty, redirectTo:RoutePath.home, pathMatch: RoutePath.full },
  
  { path: RoutePath.home, component: HomeComponent},
  
  { path: RoutePath.order, 
    loadChildren: () => import('./order-feul/order-feul.module').then(m => m.OrderFeulModule),
  },
  { path: RoutePath.previous_order, 
    loadChildren: () => import('./previous-orders/previous-orders.module').then(m => m.PreviousOrdersModule),
  },
  { path: RoutePath.profile_list, 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
