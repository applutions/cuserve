import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubadminlandingComponent } from './subadminlanding/subadminlanding.component';
import { SubadminlistComponent } from './subadminlist/subadminlist.component';
import { RoleslistComponent } from './roleslist/roleslist.component';
import { AddrolesComponent } from './addroles/addroles.component';
//  canActivate: [AuthGuardService],
const routes: Routes = [ 
    {
        path: '',   component: SubadminlandingComponent,
        children: [
            { path: '', component: SubadminlistComponent },           
            { path: 'roles', component: RoleslistComponent },    
            { path: 'addroles', component: AddrolesComponent },           


        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class SubAdminRouting { }
