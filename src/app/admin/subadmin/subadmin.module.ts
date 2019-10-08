import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubadminlandingComponent } from './subadminlanding/subadminlanding.component';
import { SubadminlistComponent } from './subadminlist/subadminlist.component';
import { RoleslistComponent } from './roleslist/roleslist.component';
import { SubAdminRouting } from './subadmin.routing';
import { ShareModule } from '../../share/share.module';
import { AddrolesComponent } from './addroles/addroles.component';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    SubAdminRouting
  ],
  declarations: [
    SubadminlandingComponent,
     SubadminlistComponent,
      RoleslistComponent,
      AddrolesComponent]
})
export class SubadminModule { }
