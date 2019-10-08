import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService , RolesGuardService } from './../providers';
import { AdminComponent } from './../admin/admin.component';
import { DashboardComponent } from './../admin/dashboard/dashboard.component';
import { LoginComponent } from './../admin/login/login.component';

import { CreateivrComponent } from '../share/createivr/createivr.component';
import { CalllogComponent } from '../share/calllog/calllog.component';   
//  canActivate: [AuthGuardService],
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', canActivate: [AuthGuardService], component: AdminComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            //{ path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users',   data: { roles: ['View_Users_List'] }, canActivate:[RolesGuardService], loadChildren: './users/users.module#UsersModule' },
            { path: 'request', data: { roles: ['View_Request_List'] }, canActivate:[RolesGuardService],  loadChildren: './request/request.module#RequestModule' },
            { path: 'android', data: { roles: ['View_Android_List'] }, canActivate:[RolesGuardService], loadChildren: './android/companylist.module#CompanylistModule' },
            { path: 'billing', data: { roles: ['View_Billing_List'] }, canActivate:[RolesGuardService], loadChildren: './billing/billing.module#BillingModule' },
            { path: 'subadmin',data: { roles: ['View_subadmin_List'] }, canActivate:[RolesGuardService], loadChildren: './subadmin/subadmin.module#SubadminModule' },
            { path: 'createivr',  component: CreateivrComponent },
            { path: 'calllog/:id', component: CalllogComponent },
            { path: 'createivr/:userid', component: CreateivrComponent },
            { path: 'editivr/:id/:userid', component: CreateivrComponent },

        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class AdminRouting { }
