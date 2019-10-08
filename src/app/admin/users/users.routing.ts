import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { LandingComponent } from './landing/landing.component';
import { BillingComponent } from './billing/billing.component';
import { UserlistsComponent } from './userlists/userlists.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { IvrlistComponent } from './ivrlist/ivrlist.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: UserlistsComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'account/:userid',
        component: AccountComponent
      },
      {
        path: 'billing/:userid',
        component: BillingComponent
      },
      {
        path: 'ivr/:userid',
        component: IvrlistComponent
      }
    ]
  }

];


// path: ' ',
// component: LandingComponent,  







export const UsersRouting: ModuleWithProviders = RouterModule.forChild(routes);
