import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'; 
import { RequestlistComponent } from './requestlist/requestlist.component';
import { RequestdetailComponent } from './requestdetail/requestdetail.component';
import { RequestlandingComponent } from './requestlanding/requestlanding.component';
const routes: Routes = [
  {
    path: '',
    component: RequestlandingComponent,
    children: [
      {
        path: '',
        component: RequestlistComponent
      },
      {
        path: 'detail/:ivrid',
        component: RequestdetailComponent
      }
    ]
  }

];
 


export const RequestRouting: ModuleWithProviders = RouterModule.forChild(routes);
