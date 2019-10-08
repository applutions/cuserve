import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BillinglistsComponent } from './billinglists/billinglists.component';
import { BillingdetailComponent } from './billingdetail/billingdetail.component'; 
import { BillingRouting } from './billing.routing';
import { ShareModule } from '../../share/share.module';
@NgModule({
  imports: [
    CommonModule,
    BillingRouting,
    ShareModule
  ],
  declarations: [LandingComponent, BillinglistsComponent, BillingdetailComponent]
})
export class BillingModule { }
