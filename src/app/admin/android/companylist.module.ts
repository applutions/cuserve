import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRouting } from './companylist.routing'; 
import { CompanylistComponent } from './companylist/companylist.component';
import { ShareModule } from '../../share/share.module';
import { AddcompanyComponent } from './addcompany/addcompany.component'; 

@NgModule({
  imports: [
    CommonModule,
    CompanyRouting,
    ShareModule, 
  ],
  declarations: [ 
    CompanylistComponent, AddcompanyComponent
    
  ]
})
export class CompanylistModule { }
