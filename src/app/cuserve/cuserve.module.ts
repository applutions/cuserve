import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { cuserveRouting} from './cuserve.routing';
import { cuserveComponent } from './cuserve.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'; 
import { SignupComponent } from './signup/signup.component';  


@NgModule({
  imports: [
      CommonModule,
      ShareModule,
      cuserveRouting
  ],
  declarations: [
    cuserveComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent, 
      SignupComponent,
  ]
})

export class cuserveModule { }
