import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CompanylistComponent } from './companylist/companylist.component';
import { AddcompanyComponent } from './addcompany/addcompany.component'; 


const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: '',
        component: CompanylistComponent
      },
      {
        path: 'addcompany',
        component: AddcompanyComponent
      }
     
    ]
  }

];


// path: ' ',
// component: LandingComponent,  







export const CompanyRouting: ModuleWithProviders = RouterModule.forChild(routes);
