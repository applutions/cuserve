import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [ 
    {
      path: '',
      loadChildren: './../app/cuserve/cuserve.module#cuserveModule'
    }, 
    {
      path: 'home',
      loadChildren: './../app/cuserve/cuserve.module#cuserveModule'
    }, 
    {
      path: 'admin',
      loadChildren: './../app/admin/admin.module#AdminModule'
    },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes,  { useHash: true })],
    exports: [RouterModule],
    providers: []
  })
  export class AppRouting {}
