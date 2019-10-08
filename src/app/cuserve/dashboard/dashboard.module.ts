import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { UserAccountComponent } from './account/account.component';
import { UserBillingComponent } from './billing/billing.component';
import { UserIvrComponent } from './ivr/ivr.component';
import { UserLandingComponent } from './landing/landing.component';
import { dashboardRouting } from './dashboard.routing';

import { ShareModule } from '../../share/share.module';


import {  KeysPipe } from '../../share/calllog/calllog.component';   



@NgModule({
  imports: [
    CommonModule,
    dashboardRouting,
    ShareModule
  ],
  declarations: [
    UserDashboardComponent,
  
    UserAccountComponent,
    UserBillingComponent,
    UserIvrComponent,  
    UserLandingComponent ]
})
export class DashboardModule { }
