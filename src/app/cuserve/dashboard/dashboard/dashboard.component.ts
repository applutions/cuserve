import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from './../../../providers';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../providers/authentication.service';
@Component({
  selector: 'user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class UserDashboardComponent  implements OnInit {
  ivrID: any;
  ivrlist: any;
  userinfo: any;
  userdetail: any;
  constructor(private http: HttpClient,
    private shareService: ShareService,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.userinfo = this.auth.getUser('customer');
   
    this.shareService.getData(constants.getivr + 'getbyuser/' + this.userinfo._id).subscribe(res => {
      this.ivrlist = res['ivr']; 
    });

    this.shareService.getData(constants.getcustomer + this.userinfo._id).subscribe(res => {
     
      this.userdetail = res['data'][0]; 
    });
  }



}
