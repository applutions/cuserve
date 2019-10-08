import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuardService } from '../providers';
import { cuserveComponent } from './cuserve.component';
import { HomeComponent } from './home/home.component'; 
import { PaymentsucessComponent } from '../share/paymentsucess/paymentsucess.component';
import { ResetpasswordComponent } from '../share/resetpassword/resetpassword.component';
import { EmailConfirmationComponent } from '../share/emailconfirmation.component';


const routes: Routes = [
    {
        path: '',  component: cuserveComponent,
        children: [
            { path: '',  component: HomeComponent },
            { path: 'dashboard', canActivate: [UserAuthGuardService], loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'paymentsucess', component: PaymentsucessComponent },
            { path: 'resetpass/:id', component: ResetpasswordComponent },
            { path: 'verify/:id', component: EmailConfirmationComponent },
            
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class cuserveRouting { }
