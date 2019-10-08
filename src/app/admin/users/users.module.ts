import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRouting } from './users.routing'; 
import { LandingComponent } from './landing/landing.component'; 
import { UserlistsComponent } from './userlists/userlists.component';
import { UserlandingComponent } from './userlanding/userlanding.component'; 
import { ShareModule } from '../../share/share.module'; 

@NgModule({
  imports: [
    CommonModule,
    UsersRouting,
    ShareModule, 
  ],
  declarations: [ 
    LandingComponent, 
    UserlistsComponent,
    UserlandingComponent,
    
  ]
})
export class UsersModule { }
