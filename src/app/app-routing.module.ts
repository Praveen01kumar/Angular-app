import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from './core/config';
import { LayoutComponent } from './pages/dashbord/layout/layout.component';

const routes: Routes = [
  {
    path: RoutePath.Empty,
    component: LayoutComponent,
    children: [
      {
        path: RoutePath.Empty,
        loadChildren: () => import('./pages/views/views.module').then(m => m.ViewsModule)
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
