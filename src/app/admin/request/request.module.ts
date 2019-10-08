import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestlistComponent } from './requestlist/requestlist.component';
import { RequestdetailComponent } from './requestdetail/requestdetail.component';
import { RequestlandingComponent } from './requestlanding/requestlanding.component';
import { ShareModule } from '../../share/share.module';
import { RequestRouting } from './request.routing';
@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    RequestRouting
  ],
  declarations: [
    RequestlistComponent,
     RequestdetailComponent,
      RequestlandingComponent]
})
export class RequestModule { }
