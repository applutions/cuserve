import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { AdminRouting } from './admin.routing';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './core/sidebar/sidebar.component'; 
import { CreateivrComponent } from '../share/createivr/createivr.component';
import { BreadcrumComponent } from './core/breadcrum/breadcrum.component';
import {   KeysPipe } from '../share/calllog/calllog.component';   
export var options: Partial<any> | (() => Partial<any>);

@NgModule({
    imports: [
        CommonModule,
        ShareModule,
        AdminRouting,
        
    ],
    declarations: [
        AdminComponent,
        HeaderComponent,
        FooterComponent,
        DashboardComponent,
        LoginComponent,
        SidebarComponent, 
        BreadcrumComponent
        
    ]
})

export class AdminModule { }