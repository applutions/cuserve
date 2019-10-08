import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import {
  DropdownModule, CalendarModule, PanelModule, TabViewModule,
  CheckboxModule, FileUploadModule, InputSwitchModule, GMapModule,
  SelectButtonModule, DialogModule, 
} from 'primeng/primeng';

import {OrganizationChartModule} from 'primeng/organizationchart';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgxStripeModule } from 'ngx-stripe'; 
import { StripeComponent } from './stripe/stripe.component';  
import { RemovewhitespacesPipe } from './pipes/removewhitespaces-pipe.pipe';
import { LoaderComponent } from './loader/loader.component';
import { GeneratebillsComponent } from './generatebills/generatebills.component';
import { CreateivrComponent } from '../share/createivr/createivr.component';


import { AccountComponent } from '../admin/users/account/account.component';
import { BillingComponent } from '../admin/users/billing/billing.component';
 import { IvrlistComponent } from '../admin/users/ivrlist/ivrlist.component';
 import { RouterModule, Routes } from '@angular/router';
 import { PaymentsucessComponent } from './paymentsucess/paymentsucess.component';
 import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
 import { EmailConfirmationComponent } from './emailconfirmation.component';
 
import { CalllogComponent, KeysPipe } from '../share/calllog/calllog.component';   
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ClipboardModule } from 'ngx-clipboard';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GMapModule,
    SelectButtonModule,
    GooglePlaceModule,
    NgxStripeModule.forRoot('pk_test_1gcuA4agFTW8D1qYc9rWfVbX'),
    ToastModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    CalendarModule,
    DropdownModule,
    OrganizationChartModule,
    RouterModule,
    TableModule, 
    FileUploadModule,
    NgxJsonViewerModule,
    ClipboardModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    TableModule,
    DropdownModule,
    FileUploadModule,
    InputSwitchModule,
    SelectButtonModule,
    CheckboxModule,
    CalendarModule,
    ConfirmDialogModule,
    EmailConfirmationComponent,
    GMapModule,
    ToastModule,
    HttpClientModule,
    GooglePlaceModule,
    TabViewModule,
    StripeComponent, 
    RemovewhitespacesPipe,
    LoaderComponent,
    OrganizationChartModule, 
    GeneratebillsComponent,
    CreateivrComponent,
    AccountComponent,
    BillingComponent,
     IvrlistComponent,
     ResetpasswordComponent,
     DialogModule,
     PaymentsucessComponent,
     CalllogComponent,
     KeysPipe,
     NgxJsonViewerModule,
     ClipboardModule
  ],
  declarations: [
    StripeComponent,  
    RemovewhitespacesPipe,
    LoaderComponent, 
    GeneratebillsComponent,
    CreateivrComponent,
    AccountComponent,
    BillingComponent,
     IvrlistComponent,
     PaymentsucessComponent,
     ResetpasswordComponent,
     EmailConfirmationComponent,
     CalllogComponent,
     KeysPipe
  ]
})
export class ShareModule { }
